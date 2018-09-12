import { connect } from 'react-redux';
import { receiveProjectProps } from '../../actions/project_actions';
import SetupForm from './setup_form';

const mapStateToProps = (state) => {
  return ({
    currentPrjProps: state.session.currentPrjProps,
    currentUser: state.users[state.session.currentUserId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveProjectProps: (prj_props) => dispatch(receiveProjectProps(prj_props))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);
