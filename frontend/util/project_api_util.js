export const createProject = (props) => {
  return $.ajax({
    method: 'post',
    url: 'api/projects/',
    data: {
      project: props
    }
  });
};

export const updateProject = (props) => {
  return $.ajax({
    method: 'patch',
    url: `api/projects/${props.id}`,
    data: {
      project: props
    }
  });
};
