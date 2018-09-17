export const fetchCategoryIndex = () => {
  return $.ajax({
    method: 'get',
    url: '/api/categories'
  });
};
