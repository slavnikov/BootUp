import React from 'react';
import { Link } from 'react-router-dom';

const RewardFooter = (props) => {

  const checkCompleteion = () => {
    return [
      props.name.length,
      props.value,
      props.description.length,
      props.delivery_date.length
    ].every((val) => {return val > 0;});
  };

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
        className={checkCompleteion() ? '' : 'deactivated pale'}
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
        className={checkCompleteion() ? '' : 'deactivated'}
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
