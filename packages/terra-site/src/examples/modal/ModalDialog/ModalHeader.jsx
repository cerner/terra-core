import React from 'react';

const ModalHeader = ({ children, ...customProps }) => {
  return (
    <h1 className={'terra-Modal-header'} {...customProps} >
      {children}
    </h1>
  );
};

export default ModalHeader;
