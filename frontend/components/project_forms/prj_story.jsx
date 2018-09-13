import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class ProjectStory extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentPrjProps;
  }

  saveChanges () {
    this.props.receiveProjectProps({
      story: this.input('story'),
    });
  }

  discardChanges () {
    const inputs = $(':input[type=text], :input[type=date], select, textarea');
    debugger
    inputs.each((idx, input) => {
      input.value = this.props.currentPrjProps[input.id] || '';
    });
  }

  input(id) {
    return document.getElementById(id).value;
  }

  render () {
    return (
      <main>
        <nav>
        </nav>
        <form>
          <div>
            <h6>Project description</h6>
            <textarea id='story' value={this.props.currentPrjProps.story}></textarea>
            <p>Use your project description to shar...</p>
          </div>
        </form>
        <button>Delete Project</button>
        <footer>
          <button onClick={this.discardChanges.bind(this)}>Discard Changes</button>
          <button onClick={this.saveChanges.bind(this)}>Save</button>
        </footer>
      </main>
    );
  }
}

export default ProjectStory;
