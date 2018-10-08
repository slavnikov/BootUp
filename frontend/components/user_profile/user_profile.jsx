import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderC/>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default UserProfile;
