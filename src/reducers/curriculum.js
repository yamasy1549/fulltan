const defaultState = (state, grade) => {
  return {
    id:        `${grade}-${state.id}`,
    divide:    state.divide,
    required:  state.required,
    title:     state.title,
    term:      state.term,
    credit:    state.credit,
    lecturer:  state.lecturer,
    getCredit: state.required // 必須科目はデフォで単位ゲット
  }
}

const curriculum = (state = defaultState, action, grade) => {
  switch (action.type) {
    case 'FETCH_CURRICULUMS':
      return defaultState(state, grade)
    case 'GET_CREDIT':
      return Object.assign({}, state, { getCredit: true })
    case 'LOSE_CREDIT':
      return Object.assign({}, state, { getCredit: false })
    default:
      return state
  }
}

export default curriculum
