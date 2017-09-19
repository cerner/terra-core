import React from 'react';
import PropTypes from 'prop-types';

const ThemeProviderThemes = {
  CLINICAL: 'cerner-clinical-theme',
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
  /**
   * When set to true, applies theme class to HTML element
   */
  isRootTheme: PropTypes.bool,
};

const defaultProps = {
  isRootTheme: true,
};


class ThemeProvider extends React.Component {
  componentDidMount() {
    if (this.props.isRootTheme === true && this.props.themeName) {
      document.documentElement.classList.add(this.props.themeName);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    if (nextProps.isRootTheme === true) {
      // Check if not an empty string
      if (this.props.themeName) {
        document.documentElement.classList.remove(this.props.themeName);
      }

      // Check if not an empty string
      if (nextProps.themeName) {
        // Add new theme class
        document.documentElement.classList.add(nextProps.themeName);
      }
    }
  }

  render() {
    const { themeName, isRootTheme, children, ...customProps } = this.props;
    return (<div {...customProps} className={themeName}>{children}</div>);
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
ThemeProvider.Opts = {};
ThemeProvider.Opts.Themes = ThemeProviderThemes;

export default ThemeProvider;
