import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return ({
    currentUserId: state.session.currentUserId,
    users: state.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    endSession: () => dispatch(endSession())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
