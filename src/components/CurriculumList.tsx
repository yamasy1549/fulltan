import * as React           from 'react'
import { inject, observer } from 'mobx-react'
import Curriculum           from './Curriculum'
import CurriculumListStore  from '../stores/CurriculumListStore'
import CurriculumModel      from '../stores/CurriculumModel'

const styles: any = require('./CurriculumList.css')

const CurriculumList: React.SFC<{ curriculumList?: CurriculumListStore }> = ({ curriculumList }) =>
  <section>
    <h2 className={styles.header}>カリキュラム一覧</h2>
    {curriculumList.curriculums.map((curriculums: CurriculumModel[], i: number) => {
      const grade: string = (i+1).toString()
      const classcode: string = curriculumList.classcode
      return (
        <section key={grade} className={styles.curriculums}>
          <h3 className={styles.curriculumListGrade}>{grade}年次</h3>
          <ul>
            {curriculums.map(curriculum => <Curriculum key={`${classcode}-${curriculum.id}`} curriculum={curriculum} />)}
          </ul>
        </section>
      )
    })}
  </section>

export default inject('curriculumList')(observer(CurriculumList))
