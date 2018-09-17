import {RECEIVE_CATEGORY_INDEX} from '../actions/category_actions';

const CategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_INDEX:
      return action.categories;
    default:
      return state;
  }
};

export default CategoriesReducer;
