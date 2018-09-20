import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_CURRENT_PROJECT, CLEAR_CURRENT_PROJECT} from '../actions/session_actions';
import { RECEIVE_CURRENT_PROJECT_PROPS } from '../actions/project_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.payload.user.id,
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
    case CLEAR_CURRENT_PROJECT:
    return {
      currentUserId: state.currentUserId,
      tempPrjProps: {},
      currentProjectId: null
    };
    case RECEIVE_SEARCH_RESULTS:
      return {
        currentUserId: state.currentUserId,
        tempPrjProps: state.tempPrjProps,
        currentProjectId: state.currentProjectId,
        searchResults: action.results,
      };
    default:
      return state;
  }
};

export default SessionReducer;
