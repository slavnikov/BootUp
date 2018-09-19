import React from 'react';

const ProjectSupport = (props) => {
  if (props.rewards.length <= 0) {
    return null;
  }

  return (
    props.rewards.map((reward) => {
      return (
          <div id='reward-pane'>
            <h1>Pledge of ${reward.value} or more</h1>
            <h3>{reward.name}</h3>
            <h6>{reward.description}</h6>
            <h4>ESTIMATED DELIVERY</h4>
            <h5>{reward.delivery_date}</h5>
            <div id='foregorund'>Select This Reward</div>
          </div>
      );
    })
  );
};

export default ProjectSupport;
