import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import LogInContainer from './session_forms/log_in_container';

const Header = (props) => {
  return (
    <Switch>
      <Route path='/setup/project/' render={() => { return <HeaderNewProject {...props}/>;}}/>
      <Route path='/setup/new_project/'render={() => { return <HeaderNewProjectNav {...props}/>;}}/>;}}/>
      <Route path='/setup' render={() => { return <HeaderSetup {...props}/>;}}/>
      <Route path='/' render={() => { return <HeaderBasic {...props}/>;}}/>;
    </Switch>
  );

};

const HeaderBasic = (props) => {
  return (
    <div className="basic-header">
      <div id="div1">
        <Link to='/setup/1' >Start a project</Link>
      </div>
      <div id="div2">
        <Link to='/' ><p className="logo">BootUp</p></Link>
      </div>
      <HeaderButton
        currentUserId={ props.currentUserId }
        endSession={ props.endSession }
        users={props.users}
        />
    </div>
  );
};

const HeaderNewProject = (props) => {
  return (
    <div className="new-prj-header">
      <div id="div1">
      </div>
      <div id="div2">
        <Link to='/' ><p className="logo">BootUp</p></Link>
      </div>
      <HeaderButton
        currentUserId={ props.currentUserId }
        endSession={ props.endSession }
        users={props.users}
        />
    </div>
  );
};

const HeaderNewProjectNav = (props) => {
  return (
    <div className="new-prj-nav">
      <div id="div5">
        <Link to='/' ><p className="nav-logo">BootUp</p></Link>
        <Link to='/setup/new_project/basics'>Basics</Link>
        <i class="fa fa-caret-right"></i>
          <Link to='/setup/new_project/story'>Story</Link>
      </div>
      <div id="div6">
        <Link to='/setup/project/overview'>Exit to Project Overview</Link>
      </div>
    </div>
  );
};

const HeaderSetup =  (props) => {
  return (
    <div className="setup-header">
      <div id="div1">
      </div>
      <div id="div2">
        <Link to='/' ><p className="logo">BootUp</p></Link>
      </div>
      <HeaderButton
        currentUserId={ props.currentUserId }
        endSession={ props.endSession }
        users={props.users}
        />
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
      <div id="div3">
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
      <div id="div3">
        <Link to='/login' >Sign in</Link>
      </div>
    );
  }
};

export default Header;
