import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>An Error Occured</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
