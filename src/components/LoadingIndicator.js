import React from 'react';
import { Preloader } from 'react-materialize';

const LoadingIndicator = ({ loading, error, children }) => {
  return <div>
      {possibleLoadingMessage(loading)}
      {possibleErrorMessage(error)}
      {children}
    </div>;
};
  
const possibleLoadingMessage = (loading) => {
  if (loading) {
    return <Preloader size="small" />;
  }
};

const possibleErrorMessage = (error) => {
  if (error) {
    return <p>An error occurred.</p>;
  }
};

export default LoadingIndicator;
