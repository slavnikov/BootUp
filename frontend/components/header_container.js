import { connect } from 'react-redux';
import Header from './header';
import {endSession} from '../actions/session_actions';

const mapStateToProps = (state) => {
  let projects;
  if (state.session.currentUserId) {
    projects = Object.values(state.entities.projects).filter((project) => {
      return project.admin_id === state.session.currentUserId;
    });
  } else {
    projects = [];
  }
  return ({
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    projects: projects
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    endSession: () => dispatch(endSession())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
