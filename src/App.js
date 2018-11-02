import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  };

  onIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  onInputChange = event => {
    if (isNaN(+event.target.value)) {
      return;
    }
    this.setState({ counter: +event.target.value });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <input value={counter} onChange={this.onInputChange} placeholder="Put Counter Value.." />
      </div>
    );
  }
}

export default App;
