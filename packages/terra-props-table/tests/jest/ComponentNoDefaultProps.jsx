import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Children
   */
  children: PropTypes.node.isRequired,
};

const ComponentValid = ({ children, ...customProps }) => (
  <div {...customProps}>
    <p>The prop-types for this component are valid to create a props-table.</p>
    {children}
  </div>
  );

ComponentValid.propTypes = propTypes;

export default ComponentValid;
