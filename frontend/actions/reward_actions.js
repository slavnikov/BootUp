import * as RewardUtil from '../util/reward_api_util';
import { receiveProject } from './project_actions';

export const REMOVE_REWARD = 'REMOVE_REWARD';

export const createReward = (reward) => {
  return (dispatch) => {
    RewardUtil.createReward(reward).then((project) => {
      dispatch(receiveProject(project));
    });
  };
};

export const updateReward = (reward) => {
  return (dispatch) => {
    RewardUtil.updateReward(reward).then((project) => {
      dispatch(receiveProject(project));
    });
  };
};

export const deleteReward = (id) => {
  return (dispatch) => {
    RewardUtil.deleteReward(id).then((reward) => {
      dispatch(removeReward(reward.id));
    });
  };
};

export const removeReward = (id) => {
  return ({
    type: REMOVE_REWARD,
    id: id
  });
};
