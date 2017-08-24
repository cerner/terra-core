import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'terra-theme-provider';

class CardTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(e) {
    this.setState({ theme: e.target.value });
  }


  render() {
    let themeSwitcher;

    function supportsCSSVars() {
      // In safari supports(--fake-var: 0) returns false while supports('(--fake-var: 0)') returns true
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="theme"> Theme: </label>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="">Default</option>
            <option value="terra-consumer-theme-margin">terra-consumer-theme-margin</option>
          </select>
        </div>
      );
    } else {
      themeSwitcher = (
        <div />
      );
    }

    return (
      <div>
        <h2 style={{ margin: '1rem 0' }}>Card Theming</h2>
        <p><b>!!! Select a theme on the top menu bar, e.g. terra-consumer-theme to enable consumer theming. </b>
        It will set the default consumer theme.</p>
        <div style={{ margin: '1rem 0' }}>{themeSwitcher}</div>
        <ThemeProvider themeName={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

CardTheme.propTypes = {
  children: PropTypes.node,
};

export default CardTheme;