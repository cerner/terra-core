import React from 'react';

const ModalBody = ({ children, ...customProps }) => {
  return (
    <div className={'terra-Modal-body'} {...customProps} >
      {children}
    </div>
  );
};

export default ModalBody;
