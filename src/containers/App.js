import React, { Component } from 'react';
import './App.css';
import ListComponent from '../components/ListComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListComponent list={['item 1', 'item 2', 'item 3']} />
      </div>
    );
  }
}

export default App;
