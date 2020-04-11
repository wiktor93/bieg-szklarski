import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = ({condition}) => {
  return condition ? (
    <Loader
      type="Oval"
      color="#005CA9"
      height={100}
      width={100}
      timeout={5000} // [sec]
    />
  ) : null;
};

export default LoadingSpinner;
