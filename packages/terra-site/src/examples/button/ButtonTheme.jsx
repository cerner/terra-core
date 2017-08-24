import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'terra-theme-provider';
import Button from 'terra-button';

const themes = {
  'cerner-consumer-theme': [
    '',
    'terra-consumer-theme-concept1',
    'terra-consumer-theme-concept2',
    'terra-consumer-theme-concept3',
    'terra-consumer-theme-concept4',
    'terra-consumer-theme-concept5',
    'terra-consumer-theme-concept6',
  ],
};

class ButtonTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      isAnimated: false,
    };
    this.handleRandomThemeChange = this.handleRandomThemeChange.bind(this);
    this.handleAutoThemeChange = this.handleAutoThemeChange.bind(this);
  }

  handleRandomThemeChange() {
    const keys = Object.keys(themes);
    const theme = keys[Math.floor(Math.random() * keys.length)];
    const subThemes = themes[theme];
    const subTheme = subThemes[Math.floor(Math.random() * subThemes.length)];
    this.setState({ theme, subTheme });
  }

  handleAutoThemeChange() {
    if (this.state.isAnimated) {
      clearInterval(this.state.animateID);
      this.setState({ isAnimated: false, theme: '', subTheme: '' });
    } else {
      this.setState({
        animateID: setInterval(this.handleRandomThemeChange, 500),
        isAnimated: true,
      });
    }
  }

  render() {
    const rainbowButton = this.state.isAnimated ? 'Click to stop' : 'Click to animate all themes';
    return (
      <div>
        <ThemeProvider themeName={this.state.theme}>
          <ThemeProvider themeName={this.state.subTheme}>
            {window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)') &&
              <Button text={rainbowButton} onClick={this.handleAutoThemeChange} />
            }
            {this.props.children}
          </ThemeProvider>
        </ThemeProvider>
      </div>
    );
  }
}

ButtonTheme.propTypes = {
  children: PropTypes.node,
};

export default ButtonTheme;
