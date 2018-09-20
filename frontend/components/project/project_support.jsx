import React from 'react';
import PledgePane from './pledge_pane';

class ProjectSupport extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      value: '',
    };
  }

  handleClick () {
    this.setState({clicked: true});
  }

  submitBacking () {
    this.props.createBacking({
      user_id: this.props.userId,
      project_id: this.props.projectId,
      value: this.state.value
    });
    this.setState({value: '', clicked: false});
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  defaultSupportField () {
    return (
      <div>
        <div id='reward-pane'>
          <h1>Make a pledge without a reward</h1>
          <input
            type='number'
            onFocus={this.handleClick.bind(this)}
            value={this.state.value}
            onChange={(e) => {this.setState({value: e.currentTarget.value});}}>
          </input>
            <div className={this.state.clicked ? '' : 'hidden'}>
              <button
                className={(this.props.userId === this.props.adminId) || !this.props.userId ? 'deactivated pale' : ''}
                onClick={this.submitBacking.bind(this)}>
                Continue
              </button>
            </div>
        </div>
      </div>
    );
  }

  render () {
    if (this.props.rewards.length <= 0) {
      return this.defaultSupportField();
    }

    return (
      <div>
        {this.defaultSupportField()}
        {this.props.rewards.map((reward) => {
          return (
            <PledgePane
              reward={reward}
              adminId={this.props.adminId}
              userId = {this.props.userId}
              projectId={this.props.projectId}
              createBacking={this.props.createBacking}/>
          );
        })}
      </div>
    );
  }
}

export default ProjectSupport;
