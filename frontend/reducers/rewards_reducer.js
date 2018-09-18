import { RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const RewardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.payload.rewards);
    default:
      return state;
  }
};

export default RewardsReducer;
