import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  session: SessionReducer
});

export default RootReducer;
