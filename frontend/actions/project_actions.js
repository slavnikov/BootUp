import * as PrjUtil from '../util/project_api_util';
import { receiveCurrentProject, clearCurrentProject } from './session_actions';

export const RECEIVE_CURRENT_PROJECT_PROPS = 'RECEIVE_CURRENT_PROJECT_PROPS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
// porject properties will be sent in in segments as user completes parts of form
// project cannot be submitted until all necessary props are filled in
// prj_props format {title: "some title", country: "USA"}
export const receiveCurrentProjectProps = (prj_props) => {
  return ({
    type: RECEIVE_CURRENT_PROJECT_PROPS,
    prj_props: prj_props
  });
};

export const createProject = (props) => {
  return (dispatch) => {
    dispatch(clearCurrentProject());
    PrjUtil.createProject(props).then((payload) => {
      dispatch(receiveProject(payload));
      dispatch(receiveCurrentProject(payload.project.id));
    });
  };
};

export const updateProject = (formData) => {
  return (dispatch) => {
    PrjUtil.updateProject(formData).then((payload) => {
      dispatch(receiveProject(payload));
    });
  };
};

export const updateProjectImage = (id, formData) => {
  return (dispatch) => {
    PrjUtil.updateProjectImage(id, formData).then((payload) => {
      dispatch(receiveProject(payload));
    });
  };
};

export const submitProject = (id) => {
  return (dispatch) => {
    PrjUtil.submitProject(id).then((payload) => {
      dispatch(receiveProject(payload));
    });
  };
};

export const fetchProject = (id) => {
  return (dispatch) => {
    PrjUtil.fetchProject(id).then((payload) => {
      dispatch(receiveProject(payload));
    });
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    return PrjUtil.fetchProjects().then((payload) => {
      dispatch(receiveProjects(payload));
    });
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    return PrjUtil.deleteProject(id).then((project) => {
      dispatch(removeProject(project));
    });
  };
};

export const removeProject = (project) => {
  return ({
    type: REMOVE_PROJECT,
    id: project.id
  });
};

export const receiveProject = (payload) => {
  return ({
    type: RECEIVE_PROJECT,
    payload: payload
  });
};

export const receiveProjects = (payload) => {
  return ({
    type: RECEIVE_PROJECTS,
    payload: payload
  });
};
