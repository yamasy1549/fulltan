import * as React           from 'react'
import { inject, observer } from 'mobx-react'
import { Grade, grades, Course, courses }  from '../consts'
import CurriculumListStore  from '../stores/CurriculumListStore'

const styles: any = require('./SelectArea.css')

@inject('curriculumList')
@observer
export default class SelectArea extends React.Component<{ curriculumList?: CurriculumListStore }, {}> {
  render() {
    return (
      <section className={styles.selectWrapper}>
        <h2 className={styles.header}>クラスを選択</h2>
        <select
          className={styles.select}
          value={this.props.curriculumList.classcode}
          onChange={e => this.handleSelect(e)}
        >
          {grades.map((g: Grade) => {
            return courses.map((c: Course) => <option>{`${g}${c}`}</option>)
          })}
        </select>
      </section>
    )
  }

  handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const classcode: string = e.currentTarget.value
    this.props.curriculumList.setClasscode(parseInt(classcode[0]) as Grade, classcode.slice(1) as Course)
  }
}
