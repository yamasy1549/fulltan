import { observable, action, computed } from 'mobx'
import { Grade }                        from '../consts'

export default class CurriculumModel {
  @observable id: string
  @observable divide: number
  @observable required: boolean
  @observable title: string
  @observable term: number
  @observable credit: number
  @observable lecturer: string
  @observable getCredit: boolean

  constructor(curriculum: any, grade: Grade) {
    this.id        = `${grade}-${curriculum.id}`,
    this.divide    = curriculum.divide,
    this.required  = curriculum.required,
    this.title     = curriculum.title,
    this.term      = curriculum.term,
    this.credit    = curriculum.credit,
    this.lecturer  = curriculum.lecturer,
    this.getCredit = curriculum.required // 必須科目はデフォで単位ゲット
  }

  @computed get gotCredit(): number {
    return this.getCredit ? this.credit : 0
  }

  @action toggleCredit(): void {
    this.getCredit = !this.getCredit
  }
}
