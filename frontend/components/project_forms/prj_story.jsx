import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import ProjectFormNavigation from './prj_form_nav';

class ProjectStory extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentProject;
  }

  saveChanges () {
    this.props.updateProject({
      id: this.props.currentProject.id,
      story: this.input('story'),
    });
  }

  discardChanges () {
    const inputs = $(':input[type=text], :input[type=date], select, textarea');
    inputs.each((idx, input) => {
      input.value = this.props.currentProject[input.id] || '';
    });
  }

  deleteProject() {
    this.props.deleteProject(this.props.currentProject.id);
    this.props.clearCurrentProject();
    this.setState({redirect: true});
  }

  input(id) {
    return document.getElementById(id).value;
  }

  render () {
    return (
      <main>
        <nav>
          <ProjectFormNavigation/>
        </nav>
        <form>
          <div>
            <h6>Project description</h6>
            <textarea id='story' defaultValue={this.props.currentProject.story}></textarea>
            <p>Use your project description to shar...</p>
          </div>
        </form>
        <button onClick={this.deleteProject.bind(this)}>Delete Project</button>
        <footer>
          <button onClick={this.discardChanges.bind(this)}>Discard Changes</button>
          <button onClick={this.saveChanges.bind(this)}>Save</button>
        </footer>
      </main>
    );
  }
}

export default ProjectStory;
