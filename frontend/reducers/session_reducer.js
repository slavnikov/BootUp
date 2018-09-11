// TODO: uncomment the session reducer in the root reducer.

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.user.id
      };
    default:
      return state;
  }
};

export default SessionReducer;
