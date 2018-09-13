import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { createUser } from '../../actions/user_actions';
import { receiveSessionError } from '../../actions/error_actions';

const mapDispatchToProps  = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    receiveSessionError: (errors) => dispatch(receiveSessionError(errors)),
  };
};

const mapSateToProps = (state) => {
  return ({
    sessionErrors: state.errors.sessionErrors
  });
};

export default connect(mapSateToProps, mapDispatchToProps)(SignUpForm);
