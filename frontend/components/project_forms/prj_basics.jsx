import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const categories = [
  "Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
  "Film & Video", "Food", "Games", "Journalism", "Music", "Photography",
  "Publishing", "Technology", "Theater"
];

class ProjectBasics extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentPrjProps;
  }

  saveChanges () {
    this.props.receiveProjectProps({
      title: this.input('title'),
      subtitle: this.input('subtitle'),
      category: this.input('category'),
      location: this.input('location'),
      end_date: this.input('end_date'),
      pledge_goal: this.input('pledge_goal')
    });
  }

  discardChanges () {
    const inputs = $(':input[type=text], :input[type=date], select');
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
            <h6>Project title</h6>
            <input id='title' type='text' value={this.props.currentPrjProps.title}></input>
            <p>Our search looks through w...</p>
          </div>
          <div>
            <h6>Short Blurb</h6>
            <input id='subtitle' type='text' value={this.props.currentPrjProps.subtitle}></input>
            <p>Give people a sense of what you’r...</p>
          </div>
          <div>
            <h6>Category</h6>
            <select id='category'>
              {
                categories.map((category, idx) => {
                  if (category === this.props.currentPrjProps.category) {
                    return <option key={idx} value={category} selected>{category}</option>;
                  } else {
                    return <option key={idx} value={category} >{category}</option>;
                  }
                })
              }
            </select>
          </div>
          <div>
            <h6>Project Location</h6>
            <input id='location' type='text' value={this.props.currentPrjProps.location}></input>
          </div>
          <div>
            <h6>Funding Duration</h6>
            <input id='end_date' type="date"></input>
          </div>
          <div>
            <h6>Funding Goal</h6>
            <input id='pledge_goal' type="text" value={this.props.currentPrjProps.pledge_goal}></input>
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

export default ProjectBasics;
