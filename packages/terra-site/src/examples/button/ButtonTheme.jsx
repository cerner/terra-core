import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'terra-theme-provider';
import Button from 'terra-button';

class ButtonTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      isAnimated: false,
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleRandomThemeChange = this.handleRandomThemeChange.bind(this);
    this.handleAutoThemeChange = this.handleAutoThemeChange.bind(this);
  }

  handleThemeChange(e) {
    this.setState({ theme: e.target.value });
  }

  handleRandomThemeChange() {
    const concept = Math.ceil(Math.random() * 6);
    this.setState({ theme: `terra-consumer-theme-concept${concept}` });
  }

  handleAutoThemeChange() {
    if (this.state.isAnimated) {
      clearInterval(this.state.animateID);
      this.setState({ isAnimated: false });
    } else {
      this.setState({
        animateID: setInterval(this.handleRandomThemeChange, 500),
        isAnimated: true,
      });
    }
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
            <option value="terra-consumer-theme-concept1">terra-consumer-theme-concept1</option>
            <option value="terra-consumer-theme-concept2">terra-consumer-theme-concept2</option>
            <option value="terra-consumer-theme-concept3">terra-consumer-theme-concept3</option>
            <option value="terra-consumer-theme-concept4">terra-consumer-theme-concept4</option>
            <option value="terra-consumer-theme-concept5">terra-consumer-theme-concept5</option>
            <option value="terra-consumer-theme-concept6">terra-consumer-theme-concept6</option>
            <option value="terra-consumer-theme-neutral">terra-consumer-theme-neutral</option>
          </select>
        </div>
      );
    } else {
      themeSwitcher = (
        <div />
      );
    }

    const rainbowButton = this.state.isAnimated ? 'Click me to stop' : "Don't click me!";
    return (
      <div>
        <h2 style={{ margin: '1rem 0' }}>Button Theming</h2>
        <p><b>!!! Select a theme on the top menu bar, e.g. terra-consumer-theme to enable consumer theming. </b>
        It will set the default consumer theme. Then select any nested theme below or pick a random theme or ...</p>
        <div style={{ margin: '1rem 0' }}>{themeSwitcher}</div>
        <ThemeProvider themeName={this.state.theme}>
          <Button text="Pick A Random Theme" onClick={this.handleRandomThemeChange} variant="primary" />
          {' '}
          <Button text={rainbowButton} onClick={this.handleAutoThemeChange} variant="secondary" />
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

ButtonTheme.propTypes = {
  children: PropTypes.node,
};

export default ButtonTheme;
