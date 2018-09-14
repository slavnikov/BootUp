import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import ProjectFormNavigation from './prj_form_nav';
import HeaderC from '../header_container';

const categories = [
  "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
  "Film & Video", "Food", "Games", "Journalism", "Music", "Photography",
  "Publishing", "Technology", "Theater"
];

class ProjectBasics extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentProject;
    this.state = {
      redirect: false
    };
  }

  saveChanges () {
    this.props.updateProject({
      id: this.props.currentProject.id,
      title: this.input('title'),
      subtitle: this.input('subtitle'),
      category: this.input('category'),
      country: this.input('country'),
      end_date: this.input('end_date'),
      pledge_goal: parseInt(this.input('pledge_goal'))
    });
  }

  discardChanges () {
    const inputs = $(':input[type=text], :input[type=date], select');
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
    if (this.state.redirect === true) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <HeaderC/>
        <main className='basics-wrapper'>
        <header>
          <h1>Start with the basics</h1>
          <h2>Make it easy for people to learn about your project.</h2>
        </header>
        <form className='basics-form'>
          <div className='form-li'>
            <div className='li-text'>
              <h6>Project title</h6>
              <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
            </div>
            <div className='li-inputs'>
              <label>Title</label>
              <input id='title' type='text' defaultValue={this.props.currentProject.title || ""}></input>
              <label>Subtitle</label>
              <input id='subtitle' type='text' defaultValue={this.props.currentProject.subtitle || ""}></input>
            </div>
          </div>
          <div className='form-li'>
            <div className='li-text'>
              <h6>Category</h6>
              <p>Choose the category that most closely aligns with your project. <br></br><br></br>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory. <br></br><br></br>You’ll be able to change the category and subcategory even after your project is live.</p>
            </div>
            <div className='li-inputs'>
              <select id='category' defaultValue={this.props.currentProject.category}>
                {
                  categories.map((category, idx) => {
                    return <option key={idx} value={category} >{category}</option>;
                    })
                  }
                </select>
            </div>
          </div>
          <div className='form-li'>
            <div className='li-text'>
              <h6>Project Location</h6>
              <p>Enter the location that best describes where your project is based.</p>
            </div>
            <div className='li-inputs'>
              <input id='country' type='text' defaultValue={this.props.currentProject.country || ""}></input>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Project End Date</h6>
              <p>Set a time limit for your campaign. You won’t be able to change this after you launch.</p>
            </div>
            <div className='li-inputs'>
              <input id='end_date' type="date" defaultValue={this.props.currentProject.end_date || ""}></input>
            </div>
          </div>

          <div className='form-li'>
            <div className='li-text'>
              <h6>Funding Goal</h6>
              <p>Set an achievable goal that covers what you need to complete your project. <br></br><br></br>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
            </div>
            <div className='li-inputs'>
              <input
                id='pledge_goal'
                type="number"
                defaultValue={this.props.currentProject.pledge_goal || ""}>
              </input>
            </div>
          </div>
        </form>
        <button onClick={this.deleteProject.bind(this)}>Delete Project</button>
        <footer>
          <button onClick={this.discardChanges.bind(this)}>Discard Changes</button>
          <button onClick={this.saveChanges.bind(this)}>Save</button>
        </footer>
      </main>
      </div>
    );
  }
}

export default ProjectBasics;
