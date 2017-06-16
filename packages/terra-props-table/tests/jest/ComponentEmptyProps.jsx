/* eslint-disable react/prop-types */
import React from 'react';

const propTypes = {
};

const defaultProps = {
};


const ComponentValid = ({ children, ...customProps }) => (
  <div {...customProps}>
    <p>The prop-types for this component are valid to create a props-table.</p>
    {children}
  </div>
  );

ComponentValid.propTypes = propTypes;
ComponentValid.defaultProps = defaultProps;

export default ComponentValid;
