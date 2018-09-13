import { RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    default:
      return state;
  }
};

export default ProjectsReducer;
