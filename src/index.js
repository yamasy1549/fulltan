import React               from 'react'
import { render }          from 'react-dom'
import { Provider }        from 'mobx-react'
import CurriculumListStore from './stores/CurriculumListStore'
import App                 from './components/App'
import reset               from './components/reset.css'
import base                from './components/base.css'

const stores = {
  curriculumList: new CurriculumListStore()
}

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
