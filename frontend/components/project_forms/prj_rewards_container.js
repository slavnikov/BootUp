import { connect } from 'react-redux';
import { createReward, deleteReward, updateReward } from '../../actions/reward_actions';
import { fetchProject } from '../../actions/project_actions';
import ProjectRewards from './prj_rewards';

const mapStateToProps = (state) => {
  let rewardsArr;

  if (Object.keys(state.entities.rewards).length > 0) {
    rewardsArr = Object.values(state.entities.rewards).filter((reward) => {
      return reward.project_id === state.session.currentProjectId;
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
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteReward: (id) => dispatch(deleteReward(id)),
    updateReward: (reward) => dispatch(updateReward(reward)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRewards);
