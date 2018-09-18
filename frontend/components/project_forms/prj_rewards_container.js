import { connect } from 'react-redux';
import { createReward } from '../../actions/reward_actions';
import ProjectRewards from './prj_rewards';

const mapStateToProps = (state) => {
  let rewardsArr;

  if (Object.keys(state.entities.rewards).length > 0) {
    rewardsArr = Object.values(state.entities.rewards).filter((reward) => {
      return rewards.project_id === state.session.currentProjectId;
    });
  } else {
    rewardsArr = [];
  }

  return ({
    currentProjectId: state.session.currentProjectId,
    rewardsArr: rewardsArr
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createReward: (reward) => dispatch(createReward(reward)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRewards);
