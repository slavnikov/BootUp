import React from 'react';

const RewardForm = (props) => {

  if (!props.formActive) {
    return null;
  } else {
    return (
      <div id='reward-form'>
        <div id='rewards-subheader-text'>
          <h2>Add a reward</h2>
          <p>Offer tangible or intangible things that bring backers closer to your project.</p>
        </div>
        <div id='form-preview-wrapper'>
          <form>
            <div className='reward-input'>
              <h2>Title</h2>
              <p>Briefly describe this reward.</p>
              <input type='text' value={props.name} onChange={props.edit('name')}></input>
            </div>
            <div className='reward-input'>
              <h2>Pledge amount</h2>
              <p>Set a minimum pledge amount for this reward.</p>
              <input type='number' value={props.value} onChange={props.edit('value')}></input>
            </div>
            <div className='reward-input'>
              <h2>Description</h2>
              <p>Describe this reward in more detail.</p>
              <textarea value={props.description} onChange={props.edit('description')}></textarea>
            </div>
            <div className='reward-input'>
              <h2>Estimated Delivery</h2>
              <p>Give yourself plenty of time. It is better to deliver to backers ahead of schedule than behind.</p>
              <input type='date' value={props.delivery_date} onChange={props.edit('delivery_date')}></input>
            </div>
          </form>
          <aside id='reward-preview'>
            <div className='reward-input' id='reward-preview-text'>
              <h2>Reward Preview</h2>
              <p>Get a glimpse of how this reward will look on your project page.</p>
            </div>
            <div id='reward-pane'>
              <h1>Pledge of ${props.value || 1} or more</h1>
              <h3>{props.name || "Reward Title"}</h3>
              <h6>{props.description || "Reward description..."}</h6>
              <h4>ESTIMATED DELIVERY</h4>
              <h5>{props.delivery_date || "reward deliver date"}</h5>
            </div>
          </aside>
        </div>
      </div>
    );
  }
};

export default RewardForm;
