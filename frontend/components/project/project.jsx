import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';

class ProjectPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchProject(this.props.match.params.project_id);
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
            </span>
            <span id='project-titles'>
              <h1>{this.props.project.title || "your project title will go here..."}</h1>
              <h3>{this.props.project.subtitle}</h3>
            </span>
          </section>
          <section>
            <div id='main-left'>
              <div id='project-picture'>
                pciture will go here
              </div>
              <div id='misc-info'>
                <i class="fa fa-map-marker"></i>
                <a id='prj-location'>{this.props.project.country}</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default ProjectPage;
