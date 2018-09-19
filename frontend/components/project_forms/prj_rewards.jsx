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
      name: "",
      value: "",
      description: "",
      delivery_date: "",
    };
    this.activateForm = this.activateForm.bind(this);
    this.deactivateForm = this.deactivateForm.bind(this);
    this.edit = this.edit.bind(this);
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
  }

  componentDidMount () {
    this.props.fetchProject(this.props.currentProjectId);
  }

  edit(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    window.props = this.props;
    window.state = this.state;
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
          name={this.state.name}
          description={this.state.description}
          value={this.state.value}
          delivery_date={this.state.delivery_date}
          currentProjectId={this.props.currentProjectId}
          createReward={this.props.createReward}
          deactivateForm={this.deactivateForm}
          />
        </main>
      </div>
    );
  }
}

export default ProjectRewards;
