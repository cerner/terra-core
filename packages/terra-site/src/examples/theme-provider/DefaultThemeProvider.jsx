/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ThemeProvider from 'terra-theme-provider';
import Badge from 'terra-badge';
import Button from 'terra-button';

class DefaultThemeProvider extends React.Component {
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
      return window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="theme"> Theme: </label>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="">Default</option>
            <option value="cerner-mock-theme">Mock Theme</option>
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

    return (
      <div>
        <div>{themeSwitcher}</div>
        <ThemeProvider themeName={this.state.theme}>
          <h3 style={{ margin: '1rem 0' }}>Mock Badge</h3>
          <div>
            <Badge text="Default" />
            {' '}
            <Badge intent="primary" text="Primary" />
            {' '}
            <Badge intent="secondary" text="Secondary" />
            {' '}
            <Badge intent="positive" text="Positive" />
            {' '}
            <Badge intent="negative" text="Negative" />
            {' '}
            <Badge intent="warning" text="Warning" />
            {' '}
            <Badge intent="info" text="Info" />
          </div>
          <h3 style={{ margin: '1rem 0' }}>Consumer Button</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Button variant="primary" text="primary" />
            {' '}
            <Button variant="primary" text="disabled" isDisabled />
            {' '}
            <Button variant="secondary" text="secondary" />
            {' '}
            <Button variant="secondary" text="disabled" isDisabled />
            {' '}
            <Button variant="link" text="link" />
            {' '}
            <Button variant="link" text="disabled" isDisabled />
            {' '}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default DefaultThemeProvider;
