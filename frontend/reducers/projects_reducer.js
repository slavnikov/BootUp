import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CATEGORY_PROJECTS } from '../actions/category_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case RECEIVE_PROJECTS:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, action.payload.projects);
    case RECEIVE_CATEGORY_PROJECTS:
      return merge({}, state, action.projects.projects);
    case REMOVE_PROJECT:
      const newState = merge({}, state);
      delete(newState[action.id]);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
