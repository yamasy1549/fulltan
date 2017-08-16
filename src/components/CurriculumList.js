import React                from 'react'
import { inject, observer } from 'mobx-react'
import Curriculum           from './Curriculum'
import styles               from './CurriculumList.css'

const CurriculumList = ({ curriculumList }) => (
  <section>
    <h2 className={styles.header}>カリキュラム一覧</h2>
    {curriculumList.curriculums.map((curriculums, i) => {
      const grade = i+1
      return (
        <section key={grade} className={styles.curriculums}>
          <h3 className={styles.curriculumListGrade}>{parseInt(grade)}年次</h3>
          <ul>
            {curriculums.map(curriculum => <Curriculum key={`${curriculumList.classcode}-${curriculum.id}`} curriculum={curriculum} />)}
          </ul>
        </section>
      )
    })}
  </section>
)
export default inject('curriculumList')(observer(CurriculumList))
