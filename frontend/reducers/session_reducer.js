import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_CURRENT_PROJECT} from '../actions/session_actions';
import { RECEIVE_CURRENT_PROJECT_PROPS } from '../actions/project_actions';
import { merge } from 'lodash';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.user.id,
        tempPrjProps: state.tempPrjProps || {},
        currentProjectId: state.currentProjectId || null,
      };
    case REMOVE_CURRENT_USER:
      return {
        currentUserId: null,
        tempPrjProps: {},
        currentProjectId: null,
      };
    case RECEIVE_CURRENT_PROJECT_PROPS:
      return {
        currentUserId: state.currentUserId,
        tempPrjProps: merge(state.tempPrjProps, action.prj_props),
        currentProjectId: state.currentProjectId || null,
      };
    case RECEIVE_CURRENT_PROJECT:
      return {
        currentUserId: state.currentUserId,
        tempPrjProps: {},
        currentProjectId: action.id
      };
    default:
      return state;
  }
};

export default SessionReducer;
