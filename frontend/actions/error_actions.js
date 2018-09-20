export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const RECEIVE_PROJECT_ERROR = 'RECEIVE_PROJECT_ERROR';

export const receiveSessionError = (errorArr) => {
  return ({
    type: RECEIVE_SESSION_ERROR,
    errors: errorArr
  });
};

export const receiveProjectError = (errorArr) => {
  return ({
    type: RECEIVE_PROJECT_ERROR,
    errors: errorArr
  });
};
