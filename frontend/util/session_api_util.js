export const createSession = (credentials) => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: {
      credentials: credentials
    }
  });
};
