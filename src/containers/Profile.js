import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Profile</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Profile;
