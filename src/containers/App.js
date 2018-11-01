import React, { Component } from 'react';
import './App.css';
import CrashingComponent from '../components/CrashingComponent';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to App</h1>
        <ErrorBoundary>
          <CrashingComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
