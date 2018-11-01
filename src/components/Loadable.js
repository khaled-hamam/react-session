import React from 'react';

const Loadable = props => <div>{props.isLoading ? <p>Loading...</p> : props.children}</div>;

export default Loadable;
