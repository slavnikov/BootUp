import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from '../header_container';

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
        <HeaderC/>
        <div className="login-wrapper">
          <form onSubmit={this.handleSubmit} className="login-form">
            <h1>Log in</h1>
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
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email">
              </input><br></br>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password">
              </input><br></br>
              <button>Log me in!</button>
              <button onClick={()=>{
                  this.setState({email: "user@demo.com", password: "password"});
                }}>Demo user</button>
              </form>
              <div className="login-bottom">
                <p>New to BootUp? <Link to='/signup' onClick={() => {this.props.receiveSessionError([]);}}>Sign up!</Link></p>

              </div>
            </div>
      </div>
    );
  }
}

export default LogInForm;
