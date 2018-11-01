import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = { counter: 0 };
  }

  onClick = e => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  componentWillMount() {
    // UNSAFE
    console.log('Component Will Mount');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    console.log('Render');
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
