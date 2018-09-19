import React from 'react';

class PledgePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: this.props.reward.value,
    };
  }

  handleClick () {
    this.setState({clicked: true});
  }

  submitBacking () {
    this.props.createBacking({
      user_id: this.props.userId,
      project_id: this.props.projectId,
      value: this.state.value,
      reward_id: this.props.reward.id,
    });
    this.setState({value: '', clicked: false});
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <div id='reward-pane'>
        <h1>Pledge of ${this.props.reward.value} or more</h1>
        <h3>{this.props.reward.name}</h3>
        <h6>{this.props.reward.description}</h6>
        <h4>ESTIMATED DELIVERY</h4>
        <h5>{this.props.reward.delivery_date}</h5>
        <div className={this.state.clicked ? '' : 'hidden'}>
          <h2>Pledge Amount</h2>
          <input
            type='number'
            onChange={(e)=> {this.setState({value: e.currentTarget.value});}}
            min={this.props.reward.value}>
          </input>
          <button onClick={this.submitBacking.bind(this)}>Continue</button>
        </div>
        <div
          id='foregorund'
          className={this.state.clicked ? 'hidden' : ''}
          onClick={this.handleClick.bind(this)}>
          Select This Reward
        </div>
      </div>
    );
  }
}

export default PledgePane;
