import { connect } from 'react-redux'
import { resendTodo } from '../actions'
import Item from '../components/Item'

const mapDispatchToProps = (dispatch, ownProps) => ({
  resend: () => dispatch(resendTodo(ownProps.todo))
})

export default connect(
  null,
  mapDispatchToProps
)(Item)