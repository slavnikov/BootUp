// This is the entry file for webpack.
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

//TESTING//
import * as UserUtils from './util/users_api_util';
import * as UserActions from './actions/user_actions';
import * as SessActions from './actions/session_actions';
//TESTING//

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // TESTING //
  window.getState = store.getState; // V
  window.dispatch = store.dispatch;
  // window.createUser = UserUtils.createUser; // V
  // window.fetchUser = UserUtils.fetchUser; //V
  // window.createUser = UserActions.createUser; // V
  // window.fetchUser = UserActions.fetchUser; //V
  window.createSession = SessActions.createSession;
  // TESTING //

});
