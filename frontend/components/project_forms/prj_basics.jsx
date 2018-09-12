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

  render () {
    return (
      <main>
        <nav>
        </nav>
        <form>
          <div>
            <h6>Project title</h6>
            <input type='text' value={this.props.currentPrjProps.title}></input>
            <p>Our search looks through w...</p>
          </div>
          <div>
            <h6>Short Blurb</h6>
            <input type='text' value={this.props.currentPrjProps.subtitle}></input>
            <p>Give people a sense of what you’r...</p>
          </div>
          <div>
            <h6>Category</h6>
            <select>
              {
                categories.map((category) => {
                  if (category === this.props.currentPrjProps.category) {
                    return <li value={category} selected>{category}</li>;
                  } else {
                    return <li value={category} >{category}</li>;
                  }
                })
              }
            </select>
          </div>
          <div>
            <h6>Project Location</h6>
            <input type='text' value={this.props.currentPrjProps.location}></input>
          </div>
          <div>
            <h6>Funding Duration</h6>
            <input type="date"></input>
          </div>
          <div>
            <h6>Funding Goal</h6>
            <input type="text" value={this.props.currentPrjProps.pledge_goal}></input>
          </div>
          <footer>
            <button>Discard Changes</button>
            <button>Save</button>
          </footer>
        </form>
        <button>Delete Project</button>
      </main>
    );
  }
}

export default ProjectBasics;
