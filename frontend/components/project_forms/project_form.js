import { connect } from 'react-redux';
import { receiveProjectProps } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state) => {
  return ({
    currentPrjProps: state.session.currentPrjProps
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveProjectProps: (prj_props) => dispatch(receiveProjectProps(prj_props))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
