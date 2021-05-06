import React from 'react';
import classNames from 'classnames/bind';
import styles from './examplesetup.scss';

const cx = classNames.bind(styles);

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const textWithBlueBorder = <div className={cx('outlined-placeholder')}>{ipsum}</div>;

const alignExampleDiv = (
  <div className={cx('placeholder')} />
);

const alignExampleDivBlue = (
  <div className={cx('highlighted-placeholder')} />
);

export {
  alignExampleDiv,
  alignExampleDivBlue,
  simpleText,
  textWithBlueBorder,
};
