import * as CategoryUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY_INDEX = 'FETCH_CATEGORY_INDEX';
export const RECEIVE_CATEGORY_PROJECTS = 'RECEIVE_CATEGORY_PROJECTS';

export const fetchCategoryIndex = () => {
  return (dispatch) => {
    CategoryUtil.fetchCategoryIndex().then((categories) => {
      dispatch(receiveCategoryIndex(categories));
    });
  };
};

export const fetchCategoryProjects = (id) => {
  return (dispatch) => {
    CategoryUtil.fetchCategoryProjects(id).then((projects) => {
      dispatch(receiveCategoryProjects(projects));
    });
  };
};

export const receiveCategoryProjects = (projects) => {
  return ({
    type: RECEIVE_CATEGORY_PROJECTS,
    projects: projects
  });
};

export const receiveCategoryIndex = (categories) => {
  return ({
    type: RECEIVE_CATEGORY_INDEX,
    categories: categories
  });
};
