import * as React     from 'react'
import Title          from '../components/Title'
import SelectArea     from '../components/SelectArea'
import CurriculumList from '../components/CurriculumList'
import Information    from '../components/Information'
import Credits        from '../components/Credits'

const styles: any = require('./App.css')

const App: React.SFC<{}> = () =>
  <main className={styles.app}>
    <Title />
    <SelectArea />
    <CurriculumList />
    <Information />
    <Credits />
  </main>

export default App
