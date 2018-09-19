import * as RewardUtil from '../util/reward_api_util';
import { receiveProject } from './project_actions';

export const createReward = (reward) => {
  return (dispatch) => {
    RewardUtil.createReward(reward).then((project) => {
      dispatch(receiveProject(project));
    });
  };
};
