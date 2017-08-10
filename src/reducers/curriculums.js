import curriculum from './curriculum'

const defaultState = []

const curriculums = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_CURRICULUMS':
      return action.curriculums.map((curriculums_of_grade, i) => {
        return curriculums_of_grade.map((c) => curriculum(c, action, i+1))
      })
    case 'GET_CREDIT':
    case 'LOSE_CREDIT':
      return state.map((curriculums_of_grade) => {
        return curriculums_of_grade.map((c) => {
          return (c.id == action.curriculum.id) ? curriculum(c, action) : c
        })
      })
    default:
      return state
  }
}

export default curriculums
