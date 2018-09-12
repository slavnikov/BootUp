import React from 'react';
import { Route, Link } from 'react-router-dom';
import LogInContainer from './session_forms/log_in_container';

const Header = (props) => {
  return (
    <div className="header">
      <div style={{width:"10px"}}>

      </div>
      <div >
        <p className="logo">BootUp</p>
      </div>
      <div>
        <HeaderButton currentUserId={ props.currentUserId } endSession={ props.endSession }/>
      </div>
    </div>
  );
};

const HeaderButton = (props) => {
  if (props.currentUserId) {
    return (
      <button onClick={props.endSession}>Log Out</button>
    );
  } else {
    return (
      <Link to='/login'>Sign in</Link>
    );
  }
};

export default Header;
