import * as PrjUtil from '../util/project_api_util';

export const RECEIVE_CURRENT_PROJECT_PROPS = 'RECEIVE_CURRENT_PROJECT_PROPS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
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
    PrjUtil.createProject(props).then((project) => {
      // dispatch(receiveProject(project));
      console.log(project);
    });
  };
};

export const updateProject = (props) => {
  return (dispatch) => {
    PrjUtil.updateProject(props).then((project) => {
      console.log(project);
    });
  };
};

export const receiveProject = (project) => {
  return ({
    type: RECEIVE_PROJECT,
    project: project
  });
};
