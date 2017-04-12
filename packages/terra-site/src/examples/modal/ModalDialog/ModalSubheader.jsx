import React from 'react';

const ModalSubheader = ({ children, ...customProps }) => {
  return (
    <h2 className={'terra-Modal-subheader'} {...customProps} >
      {children}
    </h2>
  );
};

export default ModalSubheader;
