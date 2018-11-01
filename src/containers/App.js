import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent';
import './App.css';
import Counter from '../components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'App Component',
      showCounter: true
    };
  }

  render() {
    const { name, showCounter } = this.state;
    return (
      <div className="App">
        <h1>{name}</h1>
        <ChildComponent parent={name} />
        {showCounter && <Counter />}
        <button onClick={() => this.setState({ showCounter: !showCounter })}>Toggle Counter</button>
      </div>
    );
  }
}

export default App;
