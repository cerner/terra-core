import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalHeader = ({ children, ...customProps }) => (
  <h1 className={'terra-Modal-header'} {...customProps} >
    {children}
  </h1>
  );

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
