export const RECEIVE_PROJECT_PROPS = 'RECEIVE_PROJECT_PROPS';

// porject properties will be sent in in segments as user completes parts of form
// project cannot be submitted until all necessary props are filled in
// prj_props format {title: "some title", country: "USA"}
export const receiveProjectProps = (prj_props) => {
  return ({
    type: RECEIVE_PROJECT_PROPS,
    prj_props: prj_props
  });
};
