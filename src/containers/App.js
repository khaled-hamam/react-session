import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent';
import './App.css';
import Counter from '../components/Counter';
import Form from '../components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'App Component'
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1>{name}</h1>
        <ChildComponent parent={name} />
        <Counter />
        <Form />
      </div>
    );
  }
}

export default App;
