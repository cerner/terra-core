import React from 'react';
import classNames from 'classnames/bind';
import styles from './examplesetup.scss';

const cx = classNames.bind(styles);

const ipsum = 'This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.';
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
