import { RECEIVE_SESSION_ERROR } from '../actions/error_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
