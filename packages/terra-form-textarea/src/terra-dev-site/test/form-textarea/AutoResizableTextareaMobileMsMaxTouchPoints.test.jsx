import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

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
      <div className={cx('content-wrapper')}>
        <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" ariaLabel="label" />
      </div>
    );
  }
}
