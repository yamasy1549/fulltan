import React                from 'react'
import SelectContainer      from '../containers/SelectContainer'
import CurriculumsContainer from '../containers/CurriculumsContainer'
import CreditContainer      from '../containers/CreditContainer'
import Title                from '../components/Title'
import reset                from '../components/reset.css'
import base                 from '../components/base.css'
import styles               from '../components/App.css'

const App = () => (
  <div className={styles.app}>
    <Title />
    <SelectContainer />
    <CurriculumsContainer />
    <CreditContainer />
  </div>
)
export default App
