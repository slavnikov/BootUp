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
        <HeaderButton
          currentUserId={ props.currentUserId }
          endSession={ props.endSession }
          users={props.users}
        />
      </div>
    </div>
  );
};

const HeaderButton = (props) => {
  const menuToggle = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('user-menu');
  };

  if (props.currentUserId) {
    return (
      <div>
        <button className="profilePic" onClick={menuToggle}></button>
        <menu className="hidden" id="menu">
          <header>{props.users[props.currentUserId].name}</header>
          <footer>
            <button onClick={props.endSession}>Log Out</button>
          </footer>
        </menu>
      </div>
    );
  } else {
    return (
      <Link to='/login'>Sign in</Link>
    );
  }
};

export default Header;
