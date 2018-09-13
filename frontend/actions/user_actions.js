import * as UserUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';
import { receiveSessionError } from './error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const createUser = (user) => {
  return (dispatch) => {
    UserUtil.createUser(user).then(
      (user) => {
        dispatch(receiveCurrentUser(user));
      },
      (errors) => {
        dispatch(receiveSessionError(errors.responseJSON))
      }
    );
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    UserUtil.fetchUser(id).then((user) => {
      dispatch(receiveUser(user));
    });
  };
};

export const receiveUser = (user) => {
  return ({
    type: RECEIVE_USER,
    user: user
  });
};
