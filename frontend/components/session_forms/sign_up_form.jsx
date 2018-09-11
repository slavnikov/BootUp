import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input type="text" value={this.state.name} onChange={this.update("name")}></input>
        </label><br></br>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update("email")}></input>
        </label><br></br>
      <label>Re-enter Email
          <input type="text" value={this.state.reemail} onChange={this.update("reemail")}></input>
        </label><br></br>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update("password")}></input>
        </label><br></br>
      <label>Re-enter Password
          <input type="password" value={this.state.repassword} onChange={this.update("repassword")}></input>
        </label><br></br>
      <button>Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
