import React, { Component } from 'react';

class CrashingComponent extends Component {
  componentDidMount() {
    throw new Error('Component Crashed!');
  }

  render() {
    return (
      <div>
        <h1>This component should throw an exception</h1>
      </div>
    );
  }
}

export default CrashingComponent;
