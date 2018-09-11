import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session_forms/log_in_container';

const App = () => {
  return (
    <div>
      <h1>Hello from the app World!</h1>
      <Route exact to='/login' component ={ LoginContainer }/>
    </div>
  );
};

export default App;
