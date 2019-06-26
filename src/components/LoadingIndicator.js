import React from 'react';
import { Preloader } from 'react-materialize';

const LoadingIndicator = ({ loading, error, children }) => {
  if (loading) {
    return <div>
      <Preloader size="small" />
    </div>;
  } else if (error) {
    return <p>An error occurred.</p>;
  } else {
    return <div>
      {children}
    </div>;
  }
};

export default LoadingIndicator;
