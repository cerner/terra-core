import React from 'react';

const ModalFooter = ({ children, ...customProps }) => {
  return (
    <div className={'terra-Modal-footer'} {...customProps} >
      {children}
    </div>
  );
};

export default ModalFooter;
