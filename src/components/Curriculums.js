import React from 'react'
import styles from './Curriculums.css'

const Curriculum = ({ c, grade, toggleCredit }) => {
  const { id, getCredit, credit, title, required } = c
  const term = (c.term == 0) ? '通' : (c.term == 1) ? '前' : '後'
  const attention = required && !getCredit

  return (
    <li key={id}>
      <label htmlFor={id}>
        <input
          id={id}
          className={styles.curriculumCheck}
          type="checkbox"
          checked={getCredit}
          onChange={(e) => {
            toggleCredit(id, e.target.checked)
          }}
        />
        <span className={`${styles.curriculum} ${attention ? styles.attention : ''}`}>
          <span className={styles.curriculumCredit}>{credit}</span>
          <span className={styles.curriculumTerm}>{term}</span>
          <span className={styles.curriculumTitle}>{title}</span>
          {(() => {
            if(getCredit) {
              return (
                <span className={styles.curriculumCheckmark}>
                  <svg viewBox='0 0 36.9 28.3' enableBackground='new 0 0 36.9 28.3'>
                    <path fill='#FFFFFF' d='M36.9,5.5c0,0.6-0.2,1.2-0.7,1.6L19,24.4l-3.2,3.2c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7l-3.2-3.2l-8.6-8.6c-0.4-0.4-0.7-1-0.7-1.6c0-0.6,0.2-1.2,0.7-1.6l3.2-3.2c0.4-0.4,1-0.7,1.6-0.7s1.2,0.2,1.6,0.7l7,7L29.8,0.7c0.4-0.4,1-0.7,1.6-0.7C32,0,32.6,0.2,33,0.7l3.2,3.2C36.7,4.4,36.9,4.9,36.9,5.5z' />
                  </svg>
                </span>
              )
            }
          })()}
        </span>
      </label>
    </li>
  )
}

const Curriculums = ({ curriculums, toggleCredit }) => (
  <section>
    <h2 className={styles.header}>カリキュラム一覧</h2>
    {curriculums.map((curriculums_of_grade, i) => {
      const grade = i+1
      return (
        <section key={grade} className={styles.curriculums}>
          <h3 className={styles.curriculumListGrade}>{parseInt(grade)}年次</h3>
          <ul>
            {curriculums_of_grade.map(c => <Curriculum key={c.id} c={c} grade={grade} toggleCredit={toggleCredit} />)}
          </ul>
        </section>
      )
    })}
  </section>
)
export default Curriculums
