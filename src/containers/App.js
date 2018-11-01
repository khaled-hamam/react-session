import React, { Component } from 'react';
import './App.css';
import Parent from '../components/Parent';
import Child from '../components/Child';
import Loadable from '../components/Loadable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Parent>
          <Child />
          <Loadable isLoading={isLoading}>
            <Child />
          </Loadable>
          <button onClick={() => this.setState({ isLoading: !isLoading })}>Toggle Load</button>
        </Parent>
      </div>
    );
  }
}

export default App;
