import * as UserUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';
import { receiveSessionError } from './error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const createUser = (user) => {
  return (dispatch) => {
    UserUtil.createUser(user).then(
      (payload) => {
        dispatch(receiveCurrentUser(payload));
      },
      (errors) => {
        dispatch(receiveSessionError(errors.responseJSON));
      }
    );
  };
};

export const updateUser = (newProps) => {
  return (dispatch) => {
    UserUtil.updateUser(newProps).then(
      (payload) => {
        dispatch(receiveUser(payload));
      },
      (errors) => {
        dispatch(receiveSessionError(errors.responseJSON));
      }
    );
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    UserUtil.fetchUser(id).then((payload) => {
      dispatch(receiveUser(payload));
    });
  };
};

export const receiveUser = (payload) => {
  return ({
    type: RECEIVE_USER,
    payload: payload
  });
};
