import React, { Component } from 'react';

export default class LazyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    };
  }

  componentDidMount() {
    if (!this.state.Component) {
      import('./MyComponent').then(Component => this.setState({ Component: Component.default }));
    }
  }

  render() {
    const { Component } = this.state;

    return <div>{Component ? <Component /> : <div>Loading...</div>}</div>;
  }
}
