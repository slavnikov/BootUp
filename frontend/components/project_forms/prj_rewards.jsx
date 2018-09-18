import React from 'react';
import HeaderC from '../header_container';
import RewardsSubheader from './rewards/rewards_subheader';
import RewardsListing from './rewards/rewards_listing';
import RewardForm from './rewards/reward_form';

class ProjectRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rewards: this.props.rewardsArr,
    };
  }



  render () {
    window.props = this.props;
    window.state = this.state;

    return (
      <div>
        <HeaderC/>
        <main className='basics-wrapper'>
          <header>
            <h1>Add your rewards</h1>
            <h2>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>
          </header>
          <RewardsSubheader/>
          <RewardsListing rewards={this.state.rewards}/>
          <RewardForm/>
        </main>
      </div>
    );
  }
}

export default ProjectRewards;
