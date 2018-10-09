import { RECEIVE_SESSION_ERROR } from '../actions/error_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
