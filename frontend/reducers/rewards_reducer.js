import { RECEIVE_PROJECT } from '../actions/project_actions';
import { REMOVE_REWARD } from '../actions/reward_actions';
import { merge } from 'lodash';

const RewardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.payload.rewards);
    case REMOVE_REWARD:
      const newState = merge({}, state);
      delete(newState[action.id]);
      return newState;
    default:
      return state;
  }
};

export default RewardsReducer;
