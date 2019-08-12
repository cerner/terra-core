import React from 'react';

import Textarea from '../../../Textarea';

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) { // eslint-disable-line compat/compat
      this.resetMaxTouchPoints = true;
      this.previousMaxTouchPoints = navigator.maxTouchPoints; // eslint-disable-line compat/compat

      Object.defineProperty(
        navigator, 'maxTouchPoints',
        {
          value: 1,
          configurable: true,
        },
      );
    }
  }

  componentDidUpdate() {
    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) { // eslint-disable-line compat/compat
      this.resetMaxTouchPoints = true;
      this.previousMaxTouchPoints = navigator.maxTouchPoints; // eslint-disable-line compat/compat

      Object.defineProperty(
        navigator, 'maxTouchPoints',
        {
          value: 1,
          configurable: true,
        },
      );
    }
  }

  componentWillUnmount() {
    if (this.resetMaxTouchPoints) {
      Object.defineProperty(
        navigator, 'maxTouchPoints',
        {
          value: this.previousMaxTouchPoints,
          configurable: true,
        },
      );
    }
  }

  render() {
    return (
      <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" />
    );
  }
}
