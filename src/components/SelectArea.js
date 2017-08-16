import React                from 'react'
import { inject, observer } from 'mobx-react'
import styles               from './SelectArea.css'
import { grades, courses }  from '../consts'

@inject('curriculumList')
@observer
export default class SelectArea extends React.Component {
  render() {
    return (
      <section className={styles.selectWrapper}>
        <h2 className={styles.header}>クラスを選択</h2>
        <select
          className={styles.select}
          value={this.props.curriculumList.classcode}
          onChange={e => this.handleSelect(e)}
        >
          {grades.map(g => {
            return courses.map(c => <option>{`${g}${c}`}</option>)
          })}
        </select>
      </section>
    )
  }

  handleSelect = (e) => {
    const classcode = e.target.value
    this.props.curriculumList.setClasscode(classcode[0], classcode.slice(1))
  }
}
