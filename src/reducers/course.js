const defaultState = 'ej'

const course = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CLASSCODE':
      return action.course
    default:
      return state
  }
}

export default course
