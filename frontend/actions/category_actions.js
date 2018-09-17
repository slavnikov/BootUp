import * as CategoryUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY_INDEX = 'FETCH_CATEGORY_INDEX';

export const fetchCategoryIndex = () => {
  return (dispatch) => {
    CategoryUtil.fetchCategoryIndex().then((categories) => {
      dispatch(receiveCategoryIndex(categories));
    });
  };
};

export const receiveCategoryIndex = (categories) => {
  return ({
    type: RECEIVE_CATEGORY_INDEX,
    categories: categories
  });
};
