import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.onChange} placeholder="Name..." />
      </div>
    );
  }
}

export default Form;
