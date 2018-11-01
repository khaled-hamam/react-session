import React from 'react';

const LoadableHOC = Component => props => (
  <React.Fragment>{props.isLoading ? <p>Loading...</p> : <Component {...props} />}</React.Fragment>
);

export default LoadableHOC;
