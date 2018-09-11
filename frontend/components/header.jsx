import React from 'react';
import { Route, Link } from 'react-router-dom';
import LogInContainer from './session_forms/log_in_container';

const Header = (props) => {
  if (props.currentUserId) {
    return (
      <button onClick={props.endSession}>Log Out</button>
    );
  } else {
    return (
      <Link to='/login'>Log In</Link>
    );
  }
};

export default Header;
