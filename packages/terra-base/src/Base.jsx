import React from 'react';
import PropTypes from 'prop-types';
import './baseStyles';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
};

const Base = ({ children, ...customProps }) => (
  <div {...customProps}>
    {children}
  </div>
);

Base.propTypes = propTypes;

export default Base;
