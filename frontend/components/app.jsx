import React from 'react';
import { Route } from 'react-router-dom';
import LoginC from './session_forms/log_in_container';
import SignUpC from './session_forms/sign_up_container';
import HeaderC from './header_container';
import { SetupFormC } from './project_forms/setup_container';
import ProjectPage from './project/project_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={ HeaderC }/>
      <Route path='/project/:project_id' component={ ProjectPage }/>
      <AuthRoute exact path='/login' component = { LoginC }/>
      <AuthRoute exact path='/signup' component = { SignUpC }/>
      <Route path='/setup' component = { SetupFormC }/>
    </div>
  );
};

export default App;
