import React from 'react';

import Textarea from '../../../Textarea';

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!navigator.msMaxTouchPoints || navigator.msMaxTouchPoints === 0) {
      this.resetMsMaxTouchPoints = true;
      this.previousMsMaxTouchPoints = navigator.msMaxTouchPoints;

      Object.defineProperty(
        navigator, 'msMaxTouchPoints',
        {
          value: 1,
          configurable: true,
        },
      );
    }
  }

  componentDidUpdate() {
    if (!navigator.msMaxTouchPoints || navigator.msMaxTouchPoints === 0) {
      this.resetMsMaxTouchPoints = true;
      this.previousMsMaxTouchPoints = navigator.msMaxTouchPoints;

      Object.defineProperty(
        navigator, 'msMaxTouchPoints',
        {
          value: 1,
          configurable: true,
        },
      );
    }
  }

  componentWillUnmount() {
    if (this.resetMsMaxTouchPoints) {
      Object.defineProperty(
        navigator, 'msMaxTouchPoints',
        {
          value: this.previousMsMaxTouchPoints,
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
