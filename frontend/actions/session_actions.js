import { receiveUser } from './user_actions';
import { receiveSessionError } from './error_actions';
import * as SessUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

// credentials should be in the format {email: "some", password: "string"}

export const createSession = (credentials) => {
  return (dispatch) => {
    SessUtil.createSession(credentials).then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(receiveSessionError([]));
      },
      (response) => {
        dispatch(receiveSessionError(response.responseJSON));
      }
    );
  };
};

export const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
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
