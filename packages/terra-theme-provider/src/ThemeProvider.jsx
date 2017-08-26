import React from 'react';
import PropTypes from 'prop-types';

const ThemeProviderThemes = {
  CONSUMER: 'cerner-consumer-theme',
  MOCK: 'cerner-mock-theme',
};

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: PropTypes.node.isRequired,
  /**
   * Name of class for specified theme. e.g `cerner-consumer-theme`
   */
  themeName: PropTypes.string,
};

const ThemeProvider = ({ themeName, children, ...customProps }) => (
  <div {...customProps} className={themeName}>{children}</div>
);

ThemeProvider.propTypes = propTypes;
ThemeProvider.Opts = {};
ThemeProvider.Opts.Themes = ThemeProviderThemes;

export default ThemeProvider;
