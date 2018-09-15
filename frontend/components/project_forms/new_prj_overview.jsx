import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import HeaderC from '../header_container';

class NewProjectOverview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.completeCount = 0;
  }

  checkForCompleteness (prj_params) {
    const all_done = prj_params.every((param) => {
      return this.props.currentProject[param];
    });

    if (all_done) {
      this.completeCount++;
      return <i className="fa fa-check nav-item-complete"></i>;
    } else {
      return <i className="fa fa-check"></i>;
      }
  }

  deleteProject () {
    this.props.deleteProject(this.props.currentProject.id);
    this.props.clearCurrentProject();
    this.setState({redirect: true});
  }

  submitButton () {
    if (this.completeCount === 2) {
      return <Link to='/'>Next: Submit Project</Link>;
    } else {
      return null;
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    if (!this.props.currentProject) {
      return (
        <div className='spinner-wrapper'>
          <i className="fa fa-refresh fa-spin"></i>;
        </div>
      );
    }

    return (
      <div>
        <HeaderC/>
        <main className="overview-wrapper">
          <header>
            <h1>{this.props.currentProject.category} Project</h1>
            <h3>by {this.props.currentUser.name}</h3>
          </header>
          <section className='overview-nav'>
            <h2>Project overview</h2>
            <Link to='/setup/new_project/basics'>
              {this.checkForCompleteness(['title', 'subtitle', 'category', 'country', 'end_date', 'pledge_goal'])}
              <div>
                <h3>Basics</h3>
                <p>Add an image, set your funidng goal, and more.</p>
              </div>
            </Link>
            <Link to='/setup/new_project/story'>
              {this.checkForCompleteness(['story'])}
              <div>
                <h3>Story</h3>
                <p>Add a detailed project description.</p>
              </div>
            </Link>
          </section>
          <h4>{this.completeCount} of 2 complete</h4>
          <p>When everything is done, your project will go live instantly.</p>
          <footer>
            <button onClick={this.deleteProject.bind(this)}><i className="fa fa-trash-o"></i>Delete Project</button>
            {this.submitButton()}
          </footer>
        </main>
      </div>
    );
  }
}

export default NewProjectOverview;
