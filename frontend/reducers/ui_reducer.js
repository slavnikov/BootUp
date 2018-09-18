import { DB_FETCH_COMMENCED } from '../actions/ui_actions';
import { RECEIVE_CATEGORY_INDEX } from '../actions/category_actions';
import { RECEIVE_PROJECTS } from '../actions/project_actions';

const UiReducer = (state = 0, action) => {
  switch (action.type) {
    case DB_FETCH_COMMENCED:
      return (state + 1);
    case RECEIVE_PROJECTS:
    case RECEIVE_CATEGORY_INDEX:
      return (state - 1);
    default:
      return state;
  }
};

export default UiReducer;
