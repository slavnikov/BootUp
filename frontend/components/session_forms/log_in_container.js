import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { createSession } from '../../actions/session_actions';
import { receiveSessionError } from '../../actions/error_actions';

const mapDispatchToProps  = (dispatch) => {
  return {
    createSession: (credentials) => dispatch(createSession(credentials)),
    receiveSessionError: (errors) => dispatch(receiveSessionError(errors))
  };
};

const mapSateToProps = (state) => {
  return ({
    sessionErrors: state.errors.sessionErrors
  });
};

export default connect(mapSateToProps, mapDispatchToProps)(LogInForm);
