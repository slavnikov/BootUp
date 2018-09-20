export const search = (query) => {
  return $.ajax({
    method: 'get',
    url: `/api/search/${query}`
  });
};
