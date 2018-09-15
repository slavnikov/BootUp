import { RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    default:
      return state;
  }
};

export default ProjectsReducer;
