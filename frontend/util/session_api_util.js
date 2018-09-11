export const createSession = (credentials) => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: {
      credentials: credentials
    }
  });
};

export const endSession = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session'
  });
};
