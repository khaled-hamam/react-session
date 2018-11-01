import React from 'react';

const WaitingComponent = Component => props => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </React.Suspense>
);

export default WaitingComponent;
