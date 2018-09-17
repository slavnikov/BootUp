export const fetchCategoryIndex = () => {
  return $.ajax({
    method: 'get',
    url: '/api/categories'
  });
};

export const fetchCategoryProjects = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/categories/${id}`
  });
};
