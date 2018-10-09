import React from 'react';
import HeaderC from '../header_container';
import ProjectSupport from './project_support';
import LoadingSpinner from '../util/loading_spinner';
import { Link } from 'react-router-dom';

class ProjectPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.project && this.props.project.id !== parseInt(nextProps.match.params.project_id)) {
      this.props.fetchProject(nextProps.match.params.project_id);
    }
  }

  componentDidMount () {
    this.props.fetchProject(this.props.match.params.project_id);
  }

  renderProjectImage () {
    if (this.props.project.imageUrl) {
      return (
        <div id='project-picture' className='transparent-back'>
          <img src={this.props.project.imageUrl} id='prj-page-image'></img>
        </div>
      );
    } else {
      return (
        <div id='project-picture'>
          <h1>your project pciture will go here ...</h1>
        </div>
      );
    }
  }

  rednerEditButton () {
    if (this.props.project.admin_id === this.props.currentUserId) {
      return (
        <Link
          id='edit-button'
          to='/setup/project/overview'
          onClick={() => {
            this.props.receiveCurrentProject(this.props.project.id);
            this.props.updateUser({
              id: this.props.currentUserId,
              current_project_id: this.props.project.id
            });
          }}>
          Edit Project
        </Link>
      );
    } else {
      return null;
    }
  }

  calculateTimeLeft (endDate) {
    const daysLeft = (Date.parse(endDate) - Date.now()) / 1000 / 60 / 60 / 24;

    if (daysLeft > 1) {
      return (
        <div>
          <h5>{Math.round(daysLeft)}</h5>
          <h6>days to go</h6>
        </div>
      );
    } else if (daysLeft > 0){
      return <h5>Ends Today!</h5>;
    } else {
      return <h5>Ended</h5>;
    }
  }

  render () {
    if (!this.props.project) { //loading screen
      return (
        <div>
          <LoadingSpinner/>
        </div>
      );
    }//loaing screen

    const percentage = {
      width: `${this.props.project.percentComplete || 0}%`,
    };

    const menuToggle = () => {
      const menu = document.getElementById('admin-details');
      menu.classList.toggle('hidden');
    };

    return (
      <div>
        <HeaderC/>
        <main className='project-main'>
          <section>
            <span id='admin-info'>
                <button className="adminPic" onClick={menuToggle}><i className="fa fa-user-circle"></i></button>
                <div id="admin-details" className="hidden">
                  <h3>{this.props.admin.name}</h3>
                  <h4><i class="fa fa-at"></i> {this.props.admin.email}</h4>
                  <h4><i class="fa fa-map-marker"></i> {this.props.admin.location}</h4>
                  <p><i class="fa fa-file-text-o"></i> {this.props.admin.biography}</p>
                </div>
              <span>
                By&nbsp;<a>{this.props.admin.name}</a>
              </span>
              {this.rednerEditButton()}
            </span>
            <span id='project-titles'>
              <h1>{this.props.project.title || "your project title will go here..."}</h1>
              <h3>{this.props.project.subtitle}</h3>
            </span>
            <span>
            </span>
          </section>
          <section>
            <div id='main-left'>
              {this.renderProjectImage()}
              <div id='misc-info'>
                <i className="fa fa-map-marker"></i>
                <a id='prj-location'>{this.props.project.country}</a>
              </div>
            </div>
            <div id='main-right'>
              <div id='money-bar'>
              </div>
              <div id='green-money-bar' style={percentage}>
              </div>
              <h5 id='money-green'>{`$ ${this.props.project.totalRaised}`}</h5>
              <h6>pledged of ${this.props.project.pledge_goal || " your pledge goal here..."} goal</h6>
              <h5>{this.props.project.totalBackers}</h5>
              <h6>backers</h6>
              {this.calculateTimeLeft(this.props.project.end_date)}
              <button className='light-green-button' onClick={()=> {window.scrollBy({top:900, behavior: 'smooth'});}}>Support This Project</button>
            </div>
          </section>
        </main>
        <ul id='prj-nav'>
          <li>Campaign</li>
        </ul>
        <section id='project-bottom'>
          <div id='prj-story'>
            <h1>About</h1>
            <p>{this.props.project.story || "the story you tell us about your project will go here ..."}</p>
          </div>
          <div id='prj-rewards'>
            <h1>Support</h1>
            <ProjectSupport
              adminId={this.props.project.admin_id}
              rewards={this.props.rewardsArr}
              createBacking={this.props.createBacking}
              projectId={this.props.match.params.project_id}
              userId={this.props.currentUserId}/>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectPage;
