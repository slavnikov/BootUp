import * as BackingUtil from '../util/backing_api_util.js';
import { receiveProject } from './project_actions';

export const createBacking = (backing) => {
  return (dispatch) => {
    BackingUtil.createBacking(backing).then((payload) => {
      dispatch(receiveProject(payload));
    });
  };
};
