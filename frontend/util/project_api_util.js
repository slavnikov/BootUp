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

export const submitProject = (id) => {
  return $.ajax({
    method: 'patch',
    url: `api/projects/${id}`,
    data: {
      project: {
        complete: true
      }
    }
  });
};

export const fetchProject = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/projects/${id}`
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/projects/${id}`
  });
};
