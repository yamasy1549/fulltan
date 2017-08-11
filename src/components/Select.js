import React from 'react'
import styles from './Select.css'

import { grades, courses, toClasscode } from '../consts'

class Select extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      classcode: toClasscode(this.props.grade, this.props.course)
    }
  }

  render() {
    const { grade, course, set_classcode } = this.props

    return (
      <section className={styles.selectWrapper}>
        <h2 className={styles.header}>クラスを選択</h2>
        <select
          className={styles.select}
          value={this.state.classcode}
          onChange={(e) => {
            this.setState({ classcode: e.target.value })
            set_classcode(e.target.value[0], e.target.value.slice(1))
          }}
        >
          {grades.map(g => {
            return courses.map(c => {
              const classcode = toClasscode(g, c)
              return <option value={classcode}>{classcode}</option>
            })
          })}
        </select>
      </section>
    )
  }
}
export default Select
