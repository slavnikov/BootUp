import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.currentUserId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateUser: (newProps) => dispatch(updateUser(newProps)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
