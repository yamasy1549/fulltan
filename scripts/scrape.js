// 全体的にwip

const fs        = require('fs');
const puppeteer = require('puppeteer')

async function getCurriculumList(page, url) {
  await page.goto(url)

  return await page.evaluate(() => {
    const tableList = Array.from(document.querySelectorAll('tbody')).slice(0,5)

    const curriculumList = tableList.map(table => {
      let trList = Array.from(table.querySelectorAll('tr'))
      trList = trList.slice(1,trList.length-1)

      return trList.map((tr, i) => {
        const text = tr.textContent
        const cellList = text.split("\n")

        const divide   = (cellList[1] == '一般科目') ? 0 : 1
        const required = (cellList[2] == '必修科目') ? true : false
        const title    = cellList[3]
        const term     = (cellList[4] == '通年') ? 0 : (cellList[4] == '前期') ? 1 : 2
        const credit   = parseInt(cellList[cellList.length-3])
        const lecturer = cellList[cellList.length-2].replace(/ /g, '　').replace(/,/g, '、')

        return {
          'id': i+1,
          divide,
          required,
          title,
          term,
          credit,
          lecturer
        }
      })
    })

    return curriculumList
  })
}

function saveJSON(filename, object) {
  console.log(`Saving to ${filename}...`)

  const JSONObject = JSON.stringify(object, null, '  ')
  fs.writeFile(filename, JSONObject, (err, result) => {
    if(err) console.log(err)
  })
}

!(async() => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const year   = process.argv[2]
    const cource = process.argv[3]
    const uri    = process.argv[4]

    const curriculumList = await getCurriculumList(page, uri)
    curriculumList.forEach((curriculum, i) => {
      saveJSON(`curriculum/${year}/${cource}/${i+1}.json`, curriculum)
    })

    browser.close()
  } catch(e) {
    console.error(e)
  }
})()
