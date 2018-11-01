import React, { Component } from 'react';
import ClassComponent from '../components/ClassComponent';
import './App.css';
import FunctionalComponent from '../components/FunctionalComponent';
import MyPureComponent from '../components/PureComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassComponent />
        <FunctionalComponent />
        <MyPureComponent />
      </div>
    );
  }
}

export default App;
