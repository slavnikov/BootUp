import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import CategoriesReducer from './categories_reducer';
import RewardsReducer from './rewards_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  categories: CategoriesReducer,
  rewards: RewardsReducer,
});

export default EntitiesReducer;
