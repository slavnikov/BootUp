import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import SiteDataReducer from './site_data_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  siteData: SiteDataReducer
});

export default RootReducer;
