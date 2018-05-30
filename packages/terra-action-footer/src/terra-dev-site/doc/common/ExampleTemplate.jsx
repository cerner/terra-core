import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const boxedExampleDivStyle = {
  border: '3px dotted #d3d4d5',
  paddingTop: '2rem',
  maxWidth: '768px',
};

const ExampleTemplate = ({ children }) => (
  <div style={boxedExampleDivStyle}>
    {children}
  </div>
);

ExampleTemplate.propTypes = propTypes;

export default ExampleTemplate;
