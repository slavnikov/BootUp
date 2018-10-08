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
    };
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
                <h6>Name</h6>
                <p>Let the BootUp community know what to call you.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.name}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Email</h6>
                <p>This is how we know who you are so please keep us updated.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.email}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Location</h6>
                <p>Tell us where you're from.</p>
              </div>
              <div className='li-inputs'>
                <input type='text' value={this.state.location}></input>
              </div>
            </div>

            <div className='form-li'>
              <div className='li-text'>
                <h6>Biography</h6>
                <p>Share your story with the rest of the Booters out there.</p>
              </div>
              <div className='li-inputs'>
                <textarea value={this.state.biography}></textarea>
              </div>
            </div>
          </form>
          <footer>
            <button>Update Profile</button>
          </footer>
        </main>
      </div>
    );
  }
}

export default UserProfile;
