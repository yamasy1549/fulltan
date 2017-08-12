import React                             from 'react'
import { createLogger }                  from 'redux-logger'
import { render }                        from 'react-dom'
import { Provider }                      from 'react-redux'
import { applyMiddleware, createStore }  from 'redux'
import App                               from './components/App'
import fulltan                           from './reducers'
import { fetchCurriculums }              from './actions'

const logger = createLogger()
const store = createStore(
  fulltan,
  applyMiddleware(logger)
)

store.dispatch(fetchCurriculums(4, 'EJ'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
