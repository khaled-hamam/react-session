import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Child Component'
    };
  }
  render() {
    const { name } = this.state;
    const { parent } = this.props;
    return (
      <div>
        <p>{`This is: ${name}, Child of: ${parent}`}</p>
      </div>
    );
  }
}

export default ChildComponent;
