import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import './App.css';
import Route from 'react-router-dom/Route';
import WaitingComponent from '../components/WaitingComponent';

const LazyHome = React.lazy(() => import('./Home'));
const LazyProfile = React.lazy(() => import('./Profile'));

class App extends Component {
  state = {
    isLoaded: false
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Redirect from="/" to="/home" />
          <Route exact path="/home" component={WaitingComponent(LazyHome)} />
          <Route exact path="/profile" component={WaitingComponent(LazyProfile)} />
        </div>
      </Router>
    );
  }
}

export default App;
