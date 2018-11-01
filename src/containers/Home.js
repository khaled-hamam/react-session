import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Home</h1>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}

export default Home;
