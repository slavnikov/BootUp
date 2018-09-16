import { receiveUser } from './user_actions';
import { receiveSessionError } from './error_actions';
import * as SessUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_CURRENT_PROJECT = 'RECEIVE_CURRENT_PROJECT';
export const CLEAR_CURRENT_PROJECT = 'CLEAR_CURRENT_PROJECT';

// credentials should be in the format {email: "some", password: "string"}

export const createSession = (credentials) => {
  return (dispatch) => {
    SessUtil.createSession(credentials).then(
      (payload) => {
        dispatch(receiveCurrentUser(payload));
        dispatch(receiveSessionError([]));
      },
      (response) => {
        dispatch(receiveSessionError(response.responseJSON));
      }
    );
  };
};

export const receiveCurrentUser = (payload) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    payload: payload
  });
};

export const endSession = () => {
  return (dispatch) => {
    SessUtil.endSession().then(() => {
      dispatch(removeCurrentUser());
    });
  };
};

export const removeCurrentUser = () => {
  return ({
    type: REMOVE_CURRENT_USER
  });
};

export const receiveCurrentProject = (id) => {
  return ({
    type: RECEIVE_CURRENT_PROJECT,
    id: id
  });
};

export const clearCurrentProject = () => {
  return ({
    type: CLEAR_CURRENT_PROJECT,
  });
};
