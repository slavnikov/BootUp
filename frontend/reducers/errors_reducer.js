import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ProjectErrorsReducer from './project_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer,
  projectsErrors: ProjectErrorsReducer,
});

export default ErrorsReducer;
