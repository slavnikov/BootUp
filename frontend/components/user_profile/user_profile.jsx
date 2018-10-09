import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      location: this.props.currentUser.location,
      biography: this.props.currentUser.biography,
      bad_email: null,
    };
  }

  edit (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  saveChanges() {
    this.props.updateUser({
      id: this.props.currentUser.id,
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      biography: this.state.biography
    });
  }

  enableButton () {
    const anyChanges = Object.keys(this.state).some((field) => {
      if(field === "bad_email") {return false;}
      return this.state[field] !== this.props.currentUser[field];
    });
    const noBlanks = [this.state.email, this.state.name].every((value) => {
      return value.replace(/\s/g,'').length !== 0;
    });

    if (anyChanges && noBlanks) {
      return <button onClick={this.saveChanges.bind(this)}>Update Profile</button>;
    } else {
      return null;
    }
  }

  renderErrors() {
    if (this.props.sessionErrors.length > 0 && (this.state.bad_email === this.state.email || !this.state.bad_email)) {
      if (!this.state.bad_email) {
        this.setState({bad_email: this.state.email});
      }
      return (
        <aside id='footer-errors'>
          {this.props.sessionErrors[0]}
        </aside>
      );
    }
  }

  render() {
    return (
      <div>
        <HeaderC/>
        <main className="profile-wrapper">
          <header>
            <h1>Profile</h1>
            <h3>Keep your info up to date</h3>
          </header>
          <form className='profile-form'>
            <div className='form-li'>
              <div className='li-text'>
                <h6>Name*</h6>
                <p>Let the BootUp community know what to call you.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.name} onChange={this.edit('name')}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Email*</h6>
                <p>This is how we know who you are so please keep us updated.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.email} onChange={this.edit('email')}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Location</h6>
                <p>Tell us where you're from.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.location} onChange={this.edit('location')}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Biography</h6>
                <p>Share your story with the rest of the Booters out there.</p>
              </div>
              <div className='li-inputs'>
                <textarea value={this.state.biography} onChange={this.edit('biography')}></textarea>
              </div>
            </div>
          </form>
          <footer>
            {this.renderErrors()}
            {this.enableButton()}
          </footer>
        </main>
      </div>
    );
  }
}

export default UserProfile;
