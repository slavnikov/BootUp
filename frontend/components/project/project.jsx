import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';
import { Link } from 'react-router-dom';

class ProjectPage extends React.Component {
  constructor (props) {
    super(props);
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
          onClick={() => {this.props.receiveCurrentProject(this.props.project.id);}}>
          Edit Project
        </Link>
      );
    } else {
      return null;
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

    return (
      <div>
        <HeaderC/>
        <main className='project-main'>
          <section>
            <span id='admin-info'>
              <a>
                <div id='admin-pic'>
                </div>
              </a>
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
              <div id='green-money-bar'>
              </div>
              <h5 id='money-green'>$5,048</h5>
              <h6>pledged of ${this.props.project.pledge_goal || " your pledge goal here..."}</h6>
              <h5>155</h5>
              <h6>backers</h6>
              <h5>6</h5>
              <h6>days to go</h6>
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
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectPage;
