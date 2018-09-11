export const createUser = (user) => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: {
      user: user
    }
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`,
  });
};
