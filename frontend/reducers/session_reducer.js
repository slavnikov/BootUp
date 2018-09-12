// TODO: uncomment the session reducer in the root reducer.

import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.user.id
      };
    case REMOVE_CURRENT_USER:
      return {
        currentUserId: null
      };
    default:
      return state;
  }
};

export default SessionReducer;
