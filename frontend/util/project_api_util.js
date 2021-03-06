export const createProject = (props) => {
  return $.ajax({
    method: 'post',
    url: 'api/projects/',
    data: {
      project: props
    }
  });
};

export const updateProject = (formData) => {
  return $.ajax({
    method: 'patch',
    url: `api/projects/${formData.id}`,
    data: {
      project: formData
    }
  });
};

export const updateProjectImage = (id, formData) => {
  return $.ajax({
    method: 'patch',
    url: `api/projects/${id}`,
    data: formData,
    contentType: false,
    processData: false
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

export const fetchProjects = () => {
  return $.ajax({
    method: 'get',
    url: '/api/projects'
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/projects/${id}`
  });
};
