import * as RewardUtil from '../util/reward_api_util';

export const createReward = (reward) => {
  return (dispatch) => {
    RewardUtil.createReward(reward)
  };
};
