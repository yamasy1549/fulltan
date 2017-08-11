import React                from 'react'
import SelectContainer      from '../containers/SelectContainer'
import CurriculumsContainer from '../containers/CurriculumsContainer'
import CreditContainer      from '../containers/CreditContainer'
import Title                from '../components/Title'
import reset                from '../components/reset.css'
import base                 from '../components/base.css'

const App = () => (
  <div>
    <Title />
    <SelectContainer />
    <CurriculumsContainer />
    <CreditContainer />
  </div>
)
export default App
