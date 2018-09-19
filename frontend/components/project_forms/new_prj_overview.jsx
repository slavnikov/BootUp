import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import HeaderC from '../header_container';
import {merge} from 'lodash';

class NewProjectOverview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.completeCount = {};
  }

  checkForCompleteness (prj_params, idx) {
    const all_done = prj_params.every((param) => {
      return this.props.currentProject[param];
    });

    if (all_done) {
      this.completeCount[idx] = true;
      return <i className="fa fa-check nav-item-complete"></i>;
    } else {
      return <i className="fa fa-check"></i>;
      }
  }

  checkForRewards () {
    if (this.props.rewardsArr.length > 0) {
      this.completeCount[2] = true;
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
    if ([1,2,3].every((idx) => {return this.completeCount[idx];})) {
      return <Link to ={`/project/${this.props.currentProject.id}`} onClick={() => {return this.props.submitProject(this.props.currentProject.id);}}>Submit Project</Link>;
    } else {
      return null;
    }
  }

  componentDidMount () {
    if (this.props.currentUser && Object.values(this.props.tempPrjProps).length === 3) {
      this.props.createProject(merge(this.props.tempPrjProps, {admin_id: this.props.currentUser.id}));
    } else if (this.props.currentProjectId) {
      this.props.fetchProject(this.props.currentProjectId);
    }
    this.props.fetchCategoryIndex();
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    if (!this.props.currentUser || !this.props.currentProject || Object.keys(this.props.categories).length === 0) {
      return (
        <div className='spinner-wrapper'>
          <i className="fa fa-refresh fa-spin"></i>
        </div>
      );
    }

    return (
      <div>
        <HeaderC/>
        <main className="overview-wrapper">
          <header>
            <h1>{this.props.categories[this.props.currentProject.category_id].name} Project</h1>
            <h3>by {this.props.currentUser.name}</h3>
          </header>
          <section className='overview-nav'>
            <h2>Project overview</h2>
            <Link to='/setup/project/basics'>
              {this.checkForCompleteness(['title', 'subtitle', 'category_id', 'country', 'end_date', 'pledge_goal', 'imageUrl'], 1)}
              <div>
                <h3>Basics</h3>
                <p>Add an image, set your funidng goal, and more.</p>
              </div>
            </Link>
            <Link to='/setup/project/rewards'>
              {this.checkForRewards()}
              <div>
                <h3>Rewards</h3>
                <p>Set the rewards for backing your project.</p>
              </div>
            </Link>
            <Link to='/setup/project/story'>
              {this.checkForCompleteness(['story'], 3)}
              <div>
                <h3>Story</h3>
                <p>Add a detailed description of the project.</p>
              </div>
            </Link>
          </section>
          <h4>{Object.keys(this.completeCount).length} of 3 complete</h4>
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
