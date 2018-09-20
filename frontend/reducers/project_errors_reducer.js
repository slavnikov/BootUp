import {RECEIVE_PROJECT_ERROR} from '../actions/error_actions';

const ProjectErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_ERROR:
      return action.errors;
    default:
      return state;
  }
};

export default ProjectErrorsReducer;
