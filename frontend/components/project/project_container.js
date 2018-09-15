import { connect } from 'react-redux';
import ProjecPage from './project';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.project_id];
  let admin;
  if (project) {
    admin = state.entities.users[project.admin_id];
  }

  return ({
    project: project,
    admin: admin
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjecPage);
