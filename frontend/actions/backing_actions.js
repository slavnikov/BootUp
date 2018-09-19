import * as BackingUtil from '../util/backing_api_util.js';

export const createBacking = (backing) => {
  return (dispatch) => {
    BackingUtil.createBacking(backing);
  };
};
