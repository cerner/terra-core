import React from 'react';
import PropTypes from 'prop-types';

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
