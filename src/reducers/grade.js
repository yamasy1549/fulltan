const defaultState = 4

const grade = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CLASSCODE':
      return action.grade
    default:
      return state
  }
}

export default grade
