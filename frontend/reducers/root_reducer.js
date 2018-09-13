import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  // users: UsersReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
