import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { createSession } from '../../actions/session_actions';

const mapDispatchToProps  = (dispatch) => {
  return {
    createSession: (credentials) => dispatch(createSession(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(LogInForm);
