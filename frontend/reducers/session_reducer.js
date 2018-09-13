import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_CURRENT_PROJECT_PROPS } from '../actions/project_actions';
import { merge } from 'lodash';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.user.id,
        currentPrjProps: state.currentPrjProps || {}
      };
    case REMOVE_CURRENT_USER:
      return {
        currentUserId: null,
        currentPrjProps: state.currentPrjProps || {}
      };
    case RECEIVE_CURRENT_PROJECT_PROPS:
      return {
        currentUserId: state.currentUserId,
        currentPrjProps: merge(state.currentPrjProps, action.prj_props)
      };
    default:
      return state;
  }
};

export default SessionReducer;
