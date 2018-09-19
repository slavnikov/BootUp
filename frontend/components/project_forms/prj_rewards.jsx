import React from 'react';
import HeaderC from '../header_container';
import RewardsSubheader from './rewards/rewards_subheader';
import RewardsListing from './rewards/rewards_listing';
import RewardForm from './rewards/reward_form';
import RewardFooter from './rewards/reward_footer';

class ProjectRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formActive: false,
      id: null,
      name: "",
      value: "",
      description: "",
      delivery_date: "",
    };
    this.activateForm = this.activateForm.bind(this);
    this.deactivateForm = this.deactivateForm.bind(this);
    this.edit = this.edit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.populateState = this.populateState.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.formActive && !prevState.formActive) {
      window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  edit(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  populateState(reward) {
    this.setState({
      id: reward.id,
      name: reward.name,
      value: reward.value,
      description: reward.description,
      delivery_date: reward.delivery_date,
    });
  }

  resetState() {
    this.setState({
      id: null,
      name: "",
      value: "",
      description: "",
      delivery_date: "",
    });
  }

  activateForm () {
    this.setState({formActive: true});
  }

  deactivateForm () {
    this.setState({formActive: false});
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.resetState();
  }

  componentDidMount () {
    this.props.fetchProject(this.props.currentProjectId);
  }

  render () {
    return (
      <div id='rewards-page-wrapper'>
        <HeaderC/>
        <main className='basics-wrapper'>
          <header>
            <h1>Add your rewards</h1>
            <h2>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>
          </header>
          <RewardsSubheader
            activateForm={this.activateForm}
          />
          <RewardsListing
            rewards={this.props.rewardsArr}
            activateForm={this.activateForm}
            deleteReward={this.props.deleteReward}
            deactivateForm={this.deactivateForm}
            populateState={this.populateState}
          />
          <RewardForm
            formActive={this.state.formActive}
            edit={this.edit}
            name={this.state.name}
            description={this.state.description}
            value={this.state.value}
            delivery_date={this.state.delivery_date}
          />
          <RewardFooter
            formActive = {this.state.formActive}
            id = {this.state.id}
            name={this.state.name}
            description={this.state.description}
            value={this.state.value}
            delivery_date={this.state.delivery_date}
            currentProjectId={this.props.currentProjectId}
            createReward={this.props.createReward}
            updateReward={this.props.updateReward}
            deactivateForm={this.deactivateForm}
            resetState={this.resetState}
          />
        </main>
      </div>
    );
  }
}

export default ProjectRewards;
