import React from 'react';
import LoginC from './session_forms/log_in_container';
import SignUpC from './session_forms/sign_up_container';
import HeaderC from './header_container';
import ProjectPage from './project/project_container';
import HomePageC from './home_page/home_page_container';
import UserProfile from './user_profile/user_profile_container';
import { Route } from 'react-router-dom';
import { SetupFormC } from './project_forms/setup_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={ HomePageC }/>
      <Route path='/project/:project_id' component={ ProjectPage }/>
      <ProtectedRoute path='/profile' component={UserProfile}/>
      <AuthRoute exact path='/login' component = { LoginC }/>
      <AuthRoute exact path='/signup' component = { SignUpC }/>
      <Route path='/setup' component = { SetupFormC }/>
    </div>
  );
};

export default App;
