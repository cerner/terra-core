import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalBody = ({ children, ...customProps }) => (
  <div className={'terra-Modal-body'} {...customProps} >
    {children}
  </div>
  );


ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
