import React from 'react';
import { Route } from 'react-router-dom';
import LoginC from './session_forms/log_in_container';
import SignUpC from './session_forms/sign_up_container';
import HeaderC from './header_container';
import AuthRoute from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderC/>
      <h1>Hello from the app World!</h1>
      <AuthRoute exact path='/login' component = { LoginC }/>
      <AuthRoute exact path='/signup' component = { SignUpC }/>
    </div>
  );
};

export default App;
