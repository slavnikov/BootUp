import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer
});

export default EntitiesReducer;
