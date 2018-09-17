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

export const updateUser = (newProps) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${newProps.id}`,
    data: {
      user: newProps
    }
  });
};
