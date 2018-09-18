export const fetchSiteData = () => {
  return $.ajax({
    method: 'get',
    url: '/api/usage'
  });
};
