import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  onClick = e => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    return (
      <React.Fragment>
        <p>Counter: {counter}</p>
        <button onClick={this.onClick}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
