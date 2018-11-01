import React, { Component } from 'react';
import './App.css';
import LazyComponent from '../components/LazyComponent';

class App extends Component {
  state = {
    isLoaded: false
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="App">
        <h1>Welcome to App</h1>
        {isLoaded && <LazyComponent />}
        <button onClick={() => this.setState({ isLoaded: !isLoaded })}>Toggle Component</button>
      </div>
    );
  }
}

export default App;
