import { connect } from 'react-redux';
import { receiveCurrentProjectProps } from '../../actions/project_actions';
import SetupForm from './setup_form';

const mapStateToProps = (state) => {
  return ({
    currentPrjProps: state.session.currentPrjProps,
    currentUser: state.entities.users[state.session.currentUserId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentProjectProps: (prj_props) => dispatch(receiveCurrentProjectProps(prj_props))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);
