import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div>
      <p className="logo">BootingUp</p>
      <div className='spinner-wrapper'>
        <i className="fa fa-refresh fa-spin"></i>
      </div>
    </div>
  );
};

export default LoadingSpinner;
