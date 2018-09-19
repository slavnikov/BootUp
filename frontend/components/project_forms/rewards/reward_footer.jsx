import React from 'react';

const RewardFooter = (props) => {
  return (
    <footer>
      <button
        onClick={() => {
          props.createReward({
            reward: {
              name: props.name,
              value: parseInt(props.value),
              description: props.description,
              delivery_date: props.delivery_date,
              project_id: props.currentProjectId
            }
          });
        }}>
        Save
      </button>
    </footer>
  );
};

export default RewardFooter;
