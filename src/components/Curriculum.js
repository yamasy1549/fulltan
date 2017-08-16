import React                                       from 'react'
import { useStrict, observable, computed, action } from 'mobx'
import { observer }                                from 'mobx-react'
import { toJaTerm }                                from '../consts'
import CheckMark                                   from './CheckMark'
import styles                                      from './CurriculumList.css'

useStrict(true)

@observer
export default class Curriculum extends React.Component {
  @observable getCredit = this.props.curriculum.getCredit

  @computed get attentionClassName() {
    return (this.props.curriculum.required && !this.getCredit) ? styles.attention : ''
  }

  @action toggleGetCredit() {
    this.getCredit = !this.getCredit
  }

  render() {
    const { id, credit, term, title } = this.props.curriculum

    return (
      <li key={id}>
        <label htmlFor={id}>
          <input
            id={id}
            className={styles.curriculumCheck}
            type='checkbox'
            checked={this.getCredit}
            onChange={this.handleToggle}
          />
          <span className={`${styles.curriculum} ${this.attentionClassName}`}>
            <span className={styles.curriculumCredit}>{credit}</span>
            <span className={styles.curriculumTerm}>{toJaTerm(term)}</span>
            <span className={styles.curriculumTitle}>{title}</span>
            {(() => { if (this.getCredit) return <CheckMark /> })()}
          </span>
        </label>
      </li>
    )
  }

  handleToggle = () => {
    this.props.curriculum.toggleCredit()
    this.toggleGetCredit()
  }
}
