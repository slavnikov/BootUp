import { connect } from 'react-redux';
import Header from './header';
import {endSession} from '../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    currentUserId: state.session.currentUserId,
    users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    endSession: () => dispatch(endSession())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
