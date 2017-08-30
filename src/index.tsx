import * as React          from 'react'
import * as ReactDOM       from 'react-dom'
import { Provider }        from 'mobx-react'
import CurriculumListStore from './stores/CurriculumListStore'
import App                 from './components/App'

import './components/reset.css'
import './components/base.css'

const stores = {
  curriculumList: new CurriculumListStore()
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
