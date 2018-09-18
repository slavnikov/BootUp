import React from 'react';

const RewardsListing = (props) => {
  return (
    <div id='rewards-listing'>
      {
        [0,1,2].map((idx) => {
          
          if (props.rewards[idx]) {
            return null;
          } else {
            return(
              <span key={idx} className='empty-reward'>
                + once you add a reward, it will display here...
              </span>
            );
          }
        })
      }
    </div>
  );
};

export default RewardsListing;
