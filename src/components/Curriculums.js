import React from 'react'
import styles from './Curriculums.css'

const Curriculum = ({ curriculum, grade, toggleCredit }) => (
  <ul className={styles.curriculumList}>
    {curriculum.map(c => {
      return (
        <li key={c.id} className={styles.curriculum}>
          <input
            id={c.id}
            type="checkbox"
            defaultChecked={c.required}
            onChange={(e) => toggleCredit(c.id, e.target.checked)}
          />
          <label htmlFor={c.id}>{c.title} [{c.credit}]</label>
        </li>
      )
    })}
  </ul>
)

const Curriculums = ({ curriculums, toggleCredit }) => (
  <div>
    {curriculums.map((curriculums_of_grade, i) => {
      const grade = i+1
      return (
        <div key={grade}>
          <h3 className={styles.curriculumListGrade}>{parseInt(grade)}年次</h3>
          <Curriculum curriculum={curriculums_of_grade} grade={grade} toggleCredit={toggleCredit} />
        </div>
      )
    })}
  </div>
)
export default Curriculums
