export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

export const receiveSessionError = (errorArr) => {
  return ({
    type: RECEIVE_SESSION_ERROR,
    errors: errorArr
  });
};
