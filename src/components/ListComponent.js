import React from 'react';

const ListComponent = ({ list }) => (
  <div>
    <p>List:</p>
    {/* Key is needed for Virtual DOM Rendering Optimizations */}
    {list.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);

export default ListComponent;
