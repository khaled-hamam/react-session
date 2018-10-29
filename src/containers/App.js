import React, { Component } from 'react';
import './App.css';

const JSXelement = <h1>Hello from JSX</h1>;
const JSelement = React.createElement('h1', null, 'Hello from JS');

class App extends Component {
  render() {
    return (
      <div className="App">
        {JSXelement}
        {JSelement}
      </div>
    );
  }
}

export default App;
