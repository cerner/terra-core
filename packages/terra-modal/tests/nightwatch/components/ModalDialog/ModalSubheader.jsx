import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalSubheader = ({ children, ...customProps }) => (
  <h2 className={'terra-Modal-subheader'} {...customProps} >
    {children}
  </h2>
  );

ModalSubheader.propTypes = propTypes;
ModalSubheader.defaultProps = defaultProps;

export default ModalSubheader;
