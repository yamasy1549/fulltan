import { connect } from 'react-redux'
import Select      from '../components/Select'
import { set_classcode, resetCurriculums, fetchCurriculums } from '../actions'

const mapStateToProps = (state) => {
  return {
    grade:  state.grade,
    course: state.course
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_classcode: (grade, course) => {
      dispatch(set_classcode(grade, course))
      dispatch(resetCurriculums())
      dispatch(fetchCurriculums(grade, course))
    },
  }
}

const SelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)
export default SelectContainer
