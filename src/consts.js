export const heiseiYear = 29 // 平成
export const grades = [1, 2, 3, 4, 5]
export const courses = ['M', 'ED', 'EJ', 'C', 'A']

export const required_credits = {
  "一般": 75,
  "専門": 82,
  "合計": 167
}

export const toClasscode = (grade, course) => {
  return `${grade}${course}`
}

export const credits = (curriculums) => {
  let credits = { "一般": 0, "専門": 0 }
  curriculums.forEach((curriculums_of_grade) => {
    curriculums_of_grade.forEach(c => {
      if(c.getCredit) {
        switch(c.divide) {
          case 0:
            credits["一般"] += c.credit
            break
          case 1:
            credits["専門"] += c.credit
            break
        }
      }
    })
  })

  return credits
}
