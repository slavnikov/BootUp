import React from 'react';

const RewardsSubheader = (props) => {
  return (
    <div className='rewards-subheader'>
      <div id='rewards-subheader-text'>
        <h2>Rewards</h2>
        <p>It's good to provide a range of prices but not too many options.</p>
      </div>
      <button>+Add a reward</button>
    </div>
  );
};

export default RewardsSubheader;
