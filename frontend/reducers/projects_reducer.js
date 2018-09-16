import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, action.payload.projects);
    default:
      return state;
  }
};

export default ProjectsReducer;
