import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

export default class textarea extends React.Component {
  constructor() {
    super();
    /* eslint-disable compat/compat */
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
    /* eslint-enable compat/compat */
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
      <div className={cx('content-wrapper')}>
        <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" ariaLabel="label" />
      </div>
    );
  }
}
