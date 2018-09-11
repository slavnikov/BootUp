import React from 'react';
import { Link } from 'react-router-dom'

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
    this.props.createSession(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update("email")}></input>
          </label><br></br>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")}></input>
          </label><br></br>
          <button>Log In</button>
        </form>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
}

export default LogInForm;
