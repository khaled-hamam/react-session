import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
