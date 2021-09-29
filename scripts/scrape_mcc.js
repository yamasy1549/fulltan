// MCC移行後のカリキュラムを取得する

const fs = require("fs")
const path = require("path")
const puppeteer = require("puppeteer")

// ある学科のシラバスを取得する
async function getSyllabus(browser, schoolId, departmentId, year, lang) {
  const page = await browser.newPage()

  const url = `https://syllabus.kosen-k.go.jp/Pages/PublicSubjects?school_id=${schoolId}&department_id=${departmentId}&year=${year}&lang=${lang}`
  await page.goto(url)

  return await page.evaluate(() => {
    const trs = document.querySelectorAll("table#sytablenc > tbody tr")
    const syllabus = Array.from(trs).map((tr) => {
      if (tr.className === "ctop") return null

      const row = Array.from(tr.querySelectorAll("td")).map(
        (x) => x.innerText || ""
      )
      if (row === undefined || (row[0] !== "一般" && row[0] !== "専門"))
        return null

      const general = row[0] === "一般"
      const required = row[1] === "必修"
      const title = row[2]
      const id = parseInt(row[3], 10)
      const gakushu = row[4] === "学修単位"
      const credit = parseInt(row[5], 10)
      const classes = row.slice(6, 26).flatMap((val, i) => {
        if (i % 2 == 0) {
          return val.length === 0 ? 0 : parseInt(val, 10)
        } else {
          return []
        }
      }) // [1年前期の授業時間, 1年後期, 2年前期, ... 5年後期]
      const lecturer = row[26]
      const notes = row[27] // 履修上の区分

      let grade = -1,
        term = -1
      for (const i in classes) {
        const val = classes[i]
        if (val == 0) continue
        grade = Math.floor(i / 2) + 1
        if (i % 2 === 0) term = 1 // 前期
        if (i % 2 === 1 && term === -1) term = 2 // 後期
        if (i % 2 === 1 && term === 1) term = 0 // 通年
      }

      if (title.includes("留学生") || title.includes("海外研修")) return null

      return {
        divide: general ? 0 : 1,
        required,
        grade,
        title,
        term,
        credit,
        lecturer,
      }
    })

    return syllabus.filter((x) => x !== null)
  })
}

// 各年度・全学科のシラバスを取得する
async function getAllSyllabus(browser, schoolId, year, lang) {
  const depts = {
    M: 11,
    E: 12,
    ED: 13,
    EJ: 14,
    C: 15,
    A: 16,
    //ME: 21,
    //AC: 22,
  }

  let list = {}
  for (const deptName in depts) list[deptName] = {}

  for (const deptName in depts) {
    const deptId = depts[deptName]

    const syllabus = await getSyllabus(browser, schoolId, deptId, year, lang)

    for (const grade of [1, 2, 3, 4, 5]) {
      if ((deptName === "ED" || deptName === "EJ") && grade <= 3) continue

      const gradeSyllabus = syllabus.filter(
        (lecture) => lecture.grade === grade
      )
      syllabus.forEach((lecture, i) => (lecture.id = i))

      list[deptName][grade.toString()] = gradeSyllabus
      if (deptName === "E" && grade <= 3) {
        list["EJ"][grade.toString()] = gradeSyllabus
        list["ED"][grade.toString()] = gradeSyllabus
      }
    }
  }

  list["E"] = undefined
  return list
}

async function save(filename, object) {
  console.log(`Saving to ${filename}...`)

  const json = JSON.stringify(object, null, "  ")
  console.log(path.dirname(filename))
  await fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
    if (err) console.log(err)
  })
  await fs.writeFile(filename, json, (err, result) => {
    if (err) console.log(err)
  })
}

!(async () => {
  try {
    const browser = await puppeteer.launch()

    const year = process.argv[2]
    const dest = process.argv[3]
    const lang = "ja"
    const schoolId = 27 // 明石高専
    const syllabus = await getAllSyllabus(browser, schoolId, year, lang)

    for (const deptName in syllabus) {
      for (const grade in syllabus[deptName]) {
        const path = `${dest}/${year}/${deptName}/${grade}.json`
        save(path, syllabus[deptName][grade])
      }
    }

    browser.close()
  } catch (e) {
    console.error(e)
  }
})()
