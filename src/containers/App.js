import React, { Component } from 'react';
import './App.css';
import TestComponent from '../components/TestComponent';
import LoadableHOC from '../components/LoadableHOC';

const LoadableTest = LoadableHOC(TestComponent);

class App extends Component {
  state = { isLoading: false };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <h1>Welcome to App</h1>
        <LoadableTest isLoading={isLoading} />
        <button onClick={() => this.setState({ isLoading: !isLoading })}>Toggle Loading</button>
      </div>
    );
  }
}

export default App;
