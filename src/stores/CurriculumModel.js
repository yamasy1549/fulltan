import { useStrict, observable, action, computed } from 'mobx'

useStrict(true)

export default class CurriculumModel {
  @observable id
  @observable divide
  @observable required
  @observable title
  @observable term
  @observable credit
  @observable lecturer
  @observable getCredit

  constructor(curriculum, grade) {
    this.id        = `${grade}-${curriculum.id}`,
    this.divide    = curriculum.divide,
    this.required  = curriculum.required,
    this.title     = curriculum.title,
    this.term      = curriculum.term,
    this.credit    = curriculum.credit,
    this.lecturer  = curriculum.lecturer,
    this.getCredit = curriculum.required // 必須科目はデフォで単位ゲット
  }

  @computed get gotCredit() {
    return this.getCredit ? this.credit : 0
  }

  @action toggleCredit() {
    this.getCredit = !this.getCredit
  }
}
