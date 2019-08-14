import React from 'react';

import Textarea from '../../../Textarea';

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) {
      this.resetMaxTouchPoints = true;
      this.previousMaxTouchPoints = navigator.maxTouchPoints;

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
    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) {
      this.resetMaxTouchPoints = true;
      this.previousMaxTouchPoints = navigator.maxTouchPoints;

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
      <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" ariaLabel="label" />
    );
  }
}
