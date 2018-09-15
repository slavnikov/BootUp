import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import ProjectFormNavigation from './prj_form_nav';
import HeaderC from '../header_container';

class ProjectStory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: this.props.currentProject.story
    };
  }

  saveChanges () {
    this.props.updateProject({
      id: this.props.currentProject.id,
      story: this.state.story,
    });
  }

  discardChanges () {
    this.setState({
      story: this.props.currentProject.story,
    });
  }

  edit (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  checkForCompleteness () {
    return (['story'].every((prop) => {
      return this.props.currentProject[prop];
    }) && ['story'].every((prop) => {
      return this.props.currentProject[prop] === this.state[prop];
    }));
  }

  changesMade () {
    const anyChanges = ['story'].every((prop) => {
      return this.props.currentProject[prop] === this.state[prop];
    });
    if (anyChanges) {
      return null;
    } else {
      return <button onClick={this.discardChanges.bind(this)}>Discard Changes</button>;
    }
  }

  finalButton () {
    if (this.checkForCompleteness()) {
      return <Link to='/'>Next: Submit Project</Link>;
    } else {
      return <button onClick={this.saveChanges.bind(this)}>Save</button>;
    }
  }

  render () {
    return (
      <div>
        <HeaderC/>
        <main className='basics-wrapper'>
          <header>
            <h1>Introduce your project</h1>
            <h2>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
          </header>
          <form className='basics-form'>
            <div className='story-wrapper'>
              <div className='form-li'>
                <div className='li-text'>
                  <h6>Project description</h6>
                  <p>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</p>
                </div>
                <div className='li-inputs'>
                </div>
              </div>
              <textarea
                id='story'
                value={this.state.story}
                onChange={this.edit(['story'])}>
              </textarea>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Risks and challenges</h6>
                <p>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.</p>
              </div>
              <div className='li-inputs'>
                <textarea></textarea>
              </div>
            </div>
          </form>
          <footer>
            {this.changesMade()}
            {this.finalButton()}
          </footer>
        </main>
      </div>
    );
  }
}

export default ProjectStory;
