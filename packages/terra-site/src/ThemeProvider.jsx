import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The component(s) that will be wrapped by <ThemeProvider />
   */
  children: PropTypes.node.isRequired,
  /**
   * Name of class for specified theme. e.g `terra-OSC-theme`
   */
  themeName: PropTypes.string.isRequired,
};

const ThemeProvider = ({ themeName, children, ...customProps }) => {
  return <div className={themeName}>{children}</div>;
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
