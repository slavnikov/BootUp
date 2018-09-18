import React from 'react';

const RewardForm = (props) => {
  return (
    <div id='reward-form'>
      <div id='rewards-subheader-text'>
        <h2>Add a reward</h2>
        <p>Offer tangible or intangible things that bring backers closer to your project.</p>
      </div>
      <div className='reward-input'>
        <h2>Title</h2>
        <p>Briefly describe this reward.</p>
        <input type='text'></input>
      </div>
      <div className='reward-input'>
        <h2>Pledge amount</h2>
        <p>Set a minimum pledge amount for this reward.</p>
        <input type='number'></input>
      </div>
      <div className='reward-input'>
        <h2>Description</h2>
        <p>Describe this reward in more detail.</p>
        <textarea></textarea>
      </div>
    </div>
  );
};

export default RewardForm;
