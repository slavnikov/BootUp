import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createSession(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.taget.value});
    };
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update("email")}></input>
        </label>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update("password")}></input>
        </label>
        <button>Log In</button>
      </form>
    );
  }
}

export default LogInForm;
