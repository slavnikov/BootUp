import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const Auth = ({component: Component, path, loggedIn, exact, tempPrjProps}) => {
  return <Route path={path} exact={exact} render={(props) => {
    if (loggedIn && Object.values(tempPrjProps).length === 3) {
      return <Redirect to="/setup/project/overview" />;
    } else if (loggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Component {...props} />;
    }
  }}/>;
};


const Protected = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login"/>;
      }
    }}/>;
};

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    tempPrjProps: state.session.tempPrjProps
  };
}

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
