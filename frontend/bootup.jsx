// SDG
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let preloaded_state = {};
  if (window.current_user) {
    preloaded_state = {
      entities: {
        users: {
          [window.current_user.id]: window.current_user
        },
        projects: window.projects.projects
      },
      session: {
        currentUserId: window.current_user.id,
        tempPrjProps: {},
        currentProjectId: window.current_project.id
      }
    };
    delete(window.current_user);
  } else {
    preloaded_state = {
      entities: {
        users: {},
        projects: {}
      },
      session: {
        currentUserId: null,
        tempPrjProps: {},
        currentProjectId: null
      }
    };
  }

  const store = configureStore(preloaded_state);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
