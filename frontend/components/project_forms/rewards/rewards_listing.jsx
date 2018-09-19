import React from 'react';

const RewardsListing = (props) => {
  return (
    <div id='rewards-listing'>
      {
        [0,1,2].map((idx) => {

          if (props.rewards[idx]) {
            const reward = props.rewards[idx];
            return (
              <span key={idx} className='filled-reward'>
                <div id='reward-value'>
                  ${reward.value}
                </div>
                <div id='reward-details'>
                  <h1>{reward.name}</h1>
                  <h2>{reward.description}</h2>
                </div>
                <div id='reward-date'>
                  <h1>Estimated deliver date:</h1>
                  {reward.delivery_date}
                </div>
              </span>
            );
          } else {
            return(
              <span
                key={idx}
                className='empty-reward'
                onClick={props.activateForm}
              >
                + once you add a reward, it will display here...
              </span>
            );
          }
        })
      }
      {
        props.rewards.map((reward, idx) => {
          if (idx >= 3) {
            const reward = props.rewards[idx];
            return (
              <span key={idx} className='filled-reward'>
                <div id='reward-value'>
                  ${reward.value}
                </div>
                <div id='reward-details'>
                  <h1>{reward.name}</h1>
                  <h2>{reward.description}</h2>
                </div>
                <div id='reward-date'>
                  <h1>Estimated deliver date:</h1>
                  {reward.delivery_date}
                </div>
              </span>
            );
          }
        })
      }
    </div>
  );
};

export default RewardsListing;
