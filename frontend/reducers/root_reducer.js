import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
