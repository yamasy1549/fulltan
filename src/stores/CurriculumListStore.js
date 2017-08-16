import { useStrict, observable, computed, action } from 'mobx'
import CurriculumModel from './CurriculumModel'
import { heiseiYear }  from '../consts'

useStrict(true)

export default class CurriculumListStore {
  @observable grade = '4'
  @observable course = 'EJ'
  @observable curriculums = []

  constructor(grade, course) {
    if(grade && course) this.setClasscode(grade, course)
    this.curriculums = this.fetchCurriculums()
  }

  @computed get classcode() {
    return `${this.grade}${this.course}`
  }

  @action setClasscode(grade, course) {
    this.grade = grade
    this.course = course
    this.curriculums = this.fetchCurriculums()
  }

  @computed get gotCredits() {
    let credits = { "一般": 0, "専門": 0 }
    if(this.curriculums.length == 0) return credits
    this.curriculums.forEach(curriculumsOfGrade => {
      curriculumsOfGrade.forEach(curriculum => {
        switch(curriculum.divide) {
          case 0:
            credits['一般'] += curriculum.gotCredit
            break
          case 1:
            credits['専門'] += curriculum.gotCredit
            break
        }
      })
    })
    return credits
  }

  fetchCurriculums() {
    let curriculums = []
    for(let grade=1; grade<=5; grade++) {
      const year = (grade > this.grade) ? heiseiYear : heiseiYear-this.grade+grade
      const fetchedCurriculums = require(`../../curriculum/H${year}/${this.course}/${grade}.json`)
      curriculums[grade-1] = []
      fetchedCurriculums.forEach(curriculum => {
        curriculums[grade-1].push(
          new CurriculumModel(curriculum, grade)
        )
      })
    }
    return curriculums
  }
}
