import { connect } from 'react-redux';
import {
  receiveCurrentProjectProps,
  createProject,
  updateProject,
  submitProject,
  deleteProject,
  fetchProject,
  updateProjectImage
} from '../../actions/project_actions';
import { fetchCategoryIndex } from '../../actions/category_actions';
import { clearCurrentProject } from '../../actions/session_actions';
import SetupForm from './setup_form';
import Setup1 from './setup_1';
import Setup2 from './setup_2';
import Setup3 from './setup_3';
import NewPrjOverview from './new_prj_overview';
import ProjectBasics from './prj_basics';
import ProjectStory from './prj_story';

const mapStateToProps = (state) => {
  let rewardsArr;

  if (Object.keys(state.entities.rewards).length > 0) {
    rewardsArr = Object.values(state.entities.rewards).filter((reward) => {
      return reward.project_id === state.session.currentProjectId;
    });
  } else {
    rewardsArr = [];
  }

  return ({
    tempPrjProps: state.session.tempPrjProps,
    currentUser: state.entities.users[state.session.currentUserId],
    currentProject: state.entities.projects[state.session.currentProjectId],
    currentProjectId: state.session.currentProjectId,
    categories: state.entities.categories,
    rewardsArr: rewardsArr,
    projectErrors: state.errors.projectsErrors,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentProjectProps: (prj_props) => dispatch(receiveCurrentProjectProps(prj_props)),
    createProject: (props) => dispatch(createProject(props)),
    updateProject: (formData) => dispatch(updateProject(formData)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    clearCurrentProject: () => dispatch(clearCurrentProject()),
    submitProject: (id) => dispatch(submitProject(id)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    updateProjectImage: (id, formData) => dispatch(updateProjectImage(id, formData)),
    fetchCategoryIndex: () => dispatch(fetchCategoryIndex())
  });
};

export const SetupFormC = connect(mapStateToProps, mapDispatchToProps)(SetupForm);
export const Setup1C = connect(mapStateToProps, mapDispatchToProps)(Setup1);
export const Setup2C = connect(mapStateToProps, mapDispatchToProps)(Setup2);
export const Setup3C = connect(mapStateToProps, mapDispatchToProps)(Setup3);
export const NewPrjOverviewC = connect(mapStateToProps, mapDispatchToProps)(NewPrjOverview);
export const ProjectBasicsC = connect(mapStateToProps, mapDispatchToProps)(ProjectBasics);
export const ProjectStoryC = connect(mapStateToProps, mapDispatchToProps)(ProjectStory);
