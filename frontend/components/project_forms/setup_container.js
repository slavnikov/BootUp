import { connect } from 'react-redux';
import { receiveCurrentProjectProps, createProject, updateProject, deleteProject } from '../../actions/project_actions';
import { clearCurrentProject } from '../../actions/session_actions';
import SetupForm from './setup_form';
import Setup1 from './setup_1';
import Setup2 from './setup_2';
import Setup3 from './setup_3';
import NewPrjOverview from './new_prj_overview';
import ProjectBasics from './prj_basics';
import ProjectStory from './prj_story';

const mapStateToProps = (state) => {
  return ({
    tempPrjProps: state.session.tempPrjProps,
    currentUser: state.entities.users[state.session.currentUserId],
    currentProject: state.entities.projects[state.session.currentProjectId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentProjectProps: (prj_props) => dispatch(receiveCurrentProjectProps(prj_props)),
    createProject: (props) => dispatch(createProject(props)),
    updateProject: (prj_props) => dispatch(updateProject(prj_props)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    clearCurrentProject: () => dispatch(clearCurrentProject())
  });
};

export const SetupFormC = connect(mapStateToProps, mapDispatchToProps)(SetupForm);
export const Setup1C = connect(mapStateToProps, mapDispatchToProps)(Setup1);
export const Setup2C = connect(mapStateToProps, mapDispatchToProps)(Setup2);
export const Setup3C = connect(mapStateToProps, mapDispatchToProps)(Setup3);
export const NewPrjOverviewC = connect(mapStateToProps, mapDispatchToProps)(NewPrjOverview);
export const ProjectBasicsC = connect(mapStateToProps, mapDispatchToProps)(ProjectBasics);
export const ProjectStoryC = connect(mapStateToProps, mapDispatchToProps)(ProjectStory);
