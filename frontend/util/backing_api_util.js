export const createBacking = (backing) => {
  return $.ajax({
    method: 'post',
    url: '/api/backings',
    data: {
      backing: backing
    }
  });
};
