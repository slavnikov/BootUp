import { connect } from 'react-redux';
import ProjecPage from './project';
import { fetchProject } from '../../actions/project_actions';
import { receiveCurrentProject } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.project_id];
  let admin;

  if (project) {
    admin = state.entities.users[project.admin_id];
  }

  let rewardsArr;

  if (Object.keys(state.entities.rewards).length > 0) {
    rewardsArr = Object.values(state.entities.rewards).filter((reward) => {
      return reward.project_id === parseInt(ownProps.match.params.project_id);
    });
  } else {
    rewardsArr = [];
  }

  return ({
    project: project,
    admin: admin,
    currentUserId: state.session.currentUserId,
    rewardsArr: rewardsArr
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id)),
    receiveCurrentProject: (id) => dispatch(receiveCurrentProject(id)),
    updateUser: (newProps) => dispatch(updateUser(newProps)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjecPage);
