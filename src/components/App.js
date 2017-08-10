import React                from 'react'
import SelectContainer      from '../containers/SelectContainer'
import CurriculumsContainer from '../containers/CurriculumsContainer'
import CreditContainer      from '../containers/CreditContainer'
import reset                from '../components/reset.css'

const App = () => (
  <div>
    <p>いまのところE科のみうごく。スタイルはこれからあてる</p>
    <SelectContainer />
    <CurriculumsContainer />
    <CreditContainer />
  </div>
)
export default App
