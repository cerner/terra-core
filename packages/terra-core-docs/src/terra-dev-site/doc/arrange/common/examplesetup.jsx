import React from 'react';
import classNames from 'classnames/bind';
import styles from './examplesetup.scss';

const cx = classNames.bind(styles);

const ipsum = 'This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.';
const simpleText = <span>{ipsum}</span>;
const textWithBlueBorder = <span className={cx('outlined-placeholder')}>{ipsum}</span>;

const alignExampleDiv = (
  <span className={cx('placeholder')} />
);

const alignExampleDivBlue = (
  <span className={cx('highlighted-placeholder')} />
);

export {
  alignExampleDiv,
  alignExampleDivBlue,
  simpleText,
  textWithBlueBorder,
};
