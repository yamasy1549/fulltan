import { heiseiYear, grades, toClasscode } from '../consts'

export const set_classcode = (grade, course) => {
  return {
    type: 'SET_CLASSCODE',
    grade,
    course
  }
}

export const fetchCurriculums = (grade, course) => {
  let curriculums = []
  let year = heiseiYear
  let g = grade
  for(; year>heiseiYear-grade; year--, g--) {
    const curriculum = require(`../../curriculum/H${year}/${course}/${g}.json`)
    const classcode = toClasscode(g, course)
    curriculums[g-1] = curriculum
  }

  return {
    type: 'FETCH_CURRICULUMS',
    curriculums
  }
}

export const getCredit = (id) => {
  return {
    type: 'GET_CREDIT',
    curriculum: {
      id
    }
  }
}

export const loseCredit = (id) => {
  return {
    type: 'LOSE_CREDIT',
    curriculum: {
      id
    }
  }
}
