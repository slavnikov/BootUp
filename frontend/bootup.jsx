// SDG
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING//
import * as UserUtils from './util/users_api_util';
import * as PrjUtil from './util/project_api_util';
import * as UserActions from './actions/user_actions';
import * as SessActions from './actions/session_actions';
import * as PrjActions from './actions/project_actions';
import * as CatActions from './actions/category_actions';
//TESTING//

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

  // TESTING //
  window.getState = store.getState; // V
  window.dispatch = store.dispatch;
  // window.createUser = UserUtils.createUser; // V
  // window.fetchUser = UserUtils.fetchUser; //V
  // window.createUser = UserActions.createUser; // V
  // window.fetchUser = UserActions.fetchUser; //V
  // window.createSession = SessActions.createSession;
  // window.endSession = SessActions.endSession;
  // window.receiveCurrentProjectProps = PrjActions.receiveCurrentProjectProps;
  // window.updateProject = PrjActions.updateProject;
  // window.createProject = PrjActions.createProject;
  window.fetchProjects = PrjActions.fetchProjects;
  // window.fetchCategoryProjects = CatActions.fetchCategoryProjects;
  // TESTING //

});
