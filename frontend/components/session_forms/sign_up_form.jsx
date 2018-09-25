import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from '../header_container';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';

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

  allFieldsFilled() {
    const fields = Object.values(this.state);
    return fields.every((field) => {return field.length > 0;});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSessionError([]);

    if ((this.state.email === this.state.reemail && this.state.password === this.state.repassword) && this.allFieldsFilled()) {
      this.props.createUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
    } else {
      let errors = [];
      if (this.state.email !== this.state.reemail) {
        errors.push("Email confirmation does not match email.");
      }
      if (this.state.password !== this.state.repassword){
        errors.push("Password confirmation does not match password.");
      }
      if (!this.allFieldsFilled()) {
        errors.push("All fields must be filled in.");
      }
      this.props.receiveSessionError(errors);
    }
  }

  update(field) {
    return (e) => {
      const input = e.currentTarget.value;

      if (input.length !== 0 && input.replace(/ /g, '').length === 0) {
        return null;
      } else {
        this.setState({[field]: input});
      }
    };
  }

  render () {
    return (
      <div>
        <HeaderC/>
        <div className="signup-wrapper">
          <div className="signup-top">
            <p>Have an account? <Link to='/login' onClick={() => {this.props.receiveSessionError([]);}}>Log in</Link></p>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form">
            <h1>Sign up</h1>
            <aside >
              <ul className='errors-aside'>
                {
                  this.props.sessionErrors.map((error, idx) => {
                    return <li key={idx}>{error}</li>;
                    })
                  }
                </ul>
              </aside>
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
      </div>
    );
  }
}

export default SignUpForm;
