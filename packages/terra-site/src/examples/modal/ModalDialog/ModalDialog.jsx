import React from 'react';

const ModalDialog = ({ children, ...customProps }) => {
  return (
    <div className={'terra-Modal-dialog'} {...customProps} >
      {children}
    </div>
  );
};

export default ModalDialog;
