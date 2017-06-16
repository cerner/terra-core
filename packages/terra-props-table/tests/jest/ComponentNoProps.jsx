/* eslint-disable react/prop-types */
import React from 'react';

const ComponentValid = ({ children, ...customProps }) => (
  <div {...customProps}>
    <p>The prop-types for this component are valid to create a props-table.</p>
    {children}
  </div>
  );

export default ComponentValid;
