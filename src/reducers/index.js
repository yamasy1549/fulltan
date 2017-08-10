import { combineReducers } from 'redux'
import grade       from './grade'
import course      from './course'
import curriculums from './curriculums'

const fulltanApp = combineReducers({
  grade,
  course,
  curriculums
})
export default fulltanApp
