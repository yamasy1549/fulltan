// 全体的にwip

const fs        = require('fs');
const path      = require('path');
const puppeteer = require('puppeteer')

async function getCurriculumList(page, cource, url) {
  await page.goto(url)

  return await page.evaluate((cource) => {
    const _tableList = Array.from(document.querySelectorAll('tbody'))
    let tableList = []

    // ED,EJ はtableのとりかたが違う
    if(cource == "ED") {
      tableList = [..._tableList.slice(1,5), _tableList[6]]
    } else if(cource == "EJ") {
      tableList = [..._tableList.slice(1,4), _tableList[5], _tableList[7]]
    } else {
      tableList = _tableList.slice(1,6)
    }

    const curriculumList = tableList.map(table => {
      let trList = Array.from(table.querySelectorAll('tr'))
      trList = trList.slice(1,trList.length-1)

      trList = trList.map(tr => {
        const cellList = Array.from(tr.querySelectorAll('td')).map(cell => {
          return cell.textContent
        })

        const divide   = (cellList[0] == '一般科目') ? 0 : 1
        const required = (cellList[1] == '必修科目') ? true : false
        const title    = cellList[2]
        const term     = (cellList[3] == '通年') ? 0 : (cellList[3] == '前期') ? 1 : 2
        const credit   = parseInt(cellList[cellList.length-2])
        const lecturer = cellList[cellList.length-1].replace(/\n/g, '').replace(/ /g, '　').replace(/,/g, '、')

        return {
          divide,
          required,
          title,
          term,
          credit,
          lecturer
        }
      })

      trList = trList.filter(curriculum => {
        // 「海外研修Ⅰ」「海外研修Ⅱ」「海外研修Ⅲ」は卒業に必要な単位数に含まれない
        // 留学生科目も除外
        return !curriculum.title.match(/(海外研修|留学生)/)
      })

      // id をつける
      return trList.map((curriculum, i) => {
        return Object.assign({}, { id: i+1 }, curriculum)
      })
    })

    return curriculumList
  }, cource)
}

function saveJSON(filename, object) {
  console.log(`Saving to ${filename}...`)

  const JSONObject = JSON.stringify(object, null, '  ')
  fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
    if(err) console.log(err)
  })
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

    const curriculumList = await getCurriculumList(page, cource, uri)
    curriculumList.forEach((curriculum, i) => {
      saveJSON(`curriculum/${year}/${cource}/${i+1}.json`, curriculum)
    })

    browser.close()
  } catch(e) {
    console.error(e)
  }
})()
