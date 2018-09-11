import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
    if (loggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Component {...props} />;
    }
  }}/>;
};

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  };
}

export default withRouter(connect(msp)(Auth));
