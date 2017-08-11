import { connect } from 'react-redux'
import { credits, required_credits } from '../consts'
import Credits from '../components/Credits'

const mapStateToProps = (state) => {
  return {
    credits: credits(state.curriculums),
    required_credits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CreditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits)
export default CreditContainer
