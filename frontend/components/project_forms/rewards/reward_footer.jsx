import React from 'react';
import { Link } from 'react-router-dom';

const RewardFooter = (props) => {

  const cancelButton = () => {
    if (props.formActive) {
      return (
        <button
          onClick={props.deactivateForm}>
          Cancel
        </button>
      );
    }
  };

  const mainButton = () => {
    if (!props.formActive) {
      return <Link to='/setup/project/story'>Next: Story</Link>;
    } else if (!props.id) {
      return <button
        onClick={() => {
          props.createReward({
            reward: {
              name: props.name,
              value: parseInt(props.value),
              description: props.description,
              delivery_date: props.delivery_date,
              project_id: props.currentProjectId
            }});
            props.deactivateForm();
          }}>
        Save
      </button>;
    } else {
      return <button
        onClick={() => {
          props.updateReward({
            id: props.id,
            name: props.name,
            value: parseInt(props.value),
            description: props.description,
            delivery_date: props.delivery_date,
            project_id: props.currentProjectId
          });
          props.deactivateForm();
        }}>
        Update
      </button>;
    }
  };

  return (
    <footer>
      {cancelButton()}
      {mainButton()}
    </footer>
  );
};

export default RewardFooter;
