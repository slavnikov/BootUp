import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  }
};

export default UsersReducer;
