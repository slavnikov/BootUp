import { receiveUser } from './user_actions';
import * as SessUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// credentials should be in the format {email: "some", password: "string"}

export const createSession = (credentials) => {
  return (dispatch) => {
    SessUtil.createSession(credentials).then((user) => {
      dispatch(receiveCurrentUser(user));
    });
  };
};

export const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};
