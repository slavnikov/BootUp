import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import CategoriesReducer from './categories_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  categories: CategoriesReducer
});

export default EntitiesReducer;
