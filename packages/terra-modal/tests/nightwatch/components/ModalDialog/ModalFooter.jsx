import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalFooter = ({ children, ...customProps }) => (
  <div className={'terra-Modal-footer'} {...customProps} >
    {children}
  </div>
  );


ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;

