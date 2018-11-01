import React from 'react';

const Parent = props => {
  return (
    <div>
      <h1>Inside Parent Component</h1>
      {props.children}
    </div>
  );
};

export default Parent;
