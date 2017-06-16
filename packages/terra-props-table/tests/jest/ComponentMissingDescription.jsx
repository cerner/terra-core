import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: null,
};


const ComponentMissingDescription = ({ children, ...customProps }) => (
  <div {...customProps}>
    <p>The prop-types for this component are valid to create a props-table.</p>
    {children}
  </div>
  );

ComponentMissingDescription.propTypes = propTypes;
ComponentMissingDescription.defaultProps = defaultProps;

export default ComponentMissingDescription;
