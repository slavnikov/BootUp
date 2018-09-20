import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import LogInContainer from './session_forms/log_in_container';
import SearchRender from './header/search_render_container';
import SearchBar from './header/search_bar';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searching: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch () {
    this.setState({searching: !this.state.searching});
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/setup/project/basics'render={() => { return <HeaderNewProjectNav {...this.props}/>;}}/>;}}/>
          <Route path='/setup/project/rewards'render={() => { return <HeaderNewProjectNav {...this.props}/>;}}/>;}}/>
          <Route path='/setup/project/story'render={() => { return <HeaderNewProjectNav {...this.props}/>;}}/>;}}/>
          <Route path='/setup/project/' render={() => { return <HeaderNewProject {...this.props}/>;}}/>
          <Route path='/setup' render={() => { return <HeaderSetup {...this.props}/>;}}/>
          <Route path='/' render={() => { return <HeaderBasic {...this.props}
            toggleSearch={this.toggleSearch}
            searching={this.state.searching}
            search={this.props.search}/>;}}
            />;
        </Switch>
        <SearchRender searching={this.state.searching} toggleSearch={this.toggleSearch}/>
      </div>
    );
  }
}

const HeaderBasic = (props) => {
  return (
    <div>
      <SearchBar
        searching={props.searching}
        search={props.search}
        toggleSearch={props.toggleSearch}
      />
      <div className="basic-header">
        <div id="div1">
          <Link to='/setup/1' >Start a project</Link>
        </div>
        <div id="div2">
          <Link to='/' ><p className="logo">BootUp</p></Link>
        </div>
        <div id="div3">
          <div id='search-button' onClick={props.toggleSearch}>
            Search
            <i className="fa fa-search"></i>
          </div>
          <HeaderButton
            currentUserId={ props.currentUserId }
            endSession={ props.endSession }
            users={props.users}
            projects={props.projects}
            />
        </div>
      </div>
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
      <div id='div3'>
        <HeaderButton
          currentUserId={ props.currentUserId }
          endSession={ props.endSession }
          users={props.users}
          projects={props.projects}
          />
      </div>
    </div>
  );
};

const HeaderNewProjectNav = (props) => {
  return (
    <div className="new-prj-nav">
      <div id="div5">
        <Link to='/' ><p className="nav-logo">BootUp</p></Link>
        <Link to='/setup/project/basics'>Basics</Link>
        <i className="fa fa-caret-right"></i>
        <Link to='/setup/project/rewards'>Rewards</Link>
        <i className="fa fa-caret-right"></i>
        <Link to='/setup/project/story'>Story</Link>
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
      <div id='div3'>
        <HeaderButton
          currentUserId={ props.currentUserId }
          endSession={ props.endSession }
          users={props.users}
          projects={props.projects}
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

  const imageThumb = (project) => {
    if (project.imageUrl) {
      return <div id='li-prj-img' className='transparent-back'><img src={project.imageUrl} id='thumb-render'></img></div>;
    } else {
      return <div id='li-prj-img'></div>;
    }
  };

  if (props.currentUserId) {
    return (
      <div>
        <button className="profilePic" onClick={menuToggle}><i className="fa fa-user-circle"></i></button>
        <menu className="hidden" id="menu">
          <header>{props.users[props.currentUserId].name}</header>
          <main>
            <div></div>
            <div></div>
            <ul id='ddm-project-list'>
              <h3>MY PROJECTS</h3>
              {props.projects.map((project, idx) => {
                return (
                  <li key={idx}>
                    <Link to={`/project/${project.id}`} onClick={menuToggle}>
                      {imageThumb(project)}
                      <h6>{project.title || "Untitled Project"}</h6>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </main>
          <footer>
            <button onClick={props.endSession}>Log Out</button>
          </footer>
        </menu>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/login' >Sign in</Link>
      </div>
    );
  }
};

export default Header;
