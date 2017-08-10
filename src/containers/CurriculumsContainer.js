import { connect } from 'react-redux'
import Curriculums from '../components/Curriculums'
import { getCredit, loseCredit } from '../actions'

const mapStateToProps = (state) => {
  return {
    curriculums: state.curriculums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCredit: (id, isGot) => {
      if(isGot)
        dispatch(getCredit(id))
      else
        dispatch(loseCredit(id))
    }
  }
}

const CurriculumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Curriculums)
export default CurriculumsContainer
