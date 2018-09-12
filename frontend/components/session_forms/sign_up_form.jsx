import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      reemail: "",
      password: "",
      repassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    return (
      <div className="signup-wrapper">
        <div className="signup-top">
          <p>Have an account? <Link to='/login'>Log in</Link></p>
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h1>Sign up</h1>
            <input
              placeholder="Name"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}>
            </input>
          <br></br>
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}>
            </input>
          <br></br>
            <input
              placeholder="Re-enter email"
              type="text"
              value={this.state.reemail}
              onChange={this.update("reemail")}>
            </input>
          <br></br>
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}>
            </input>
          <br></br>
            <input
              placeholder="Re-enter password"
              type="password"
              value={this.state.repassword}
              onChange={this.update("repassword")}>
            </input>
          <br></br>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
