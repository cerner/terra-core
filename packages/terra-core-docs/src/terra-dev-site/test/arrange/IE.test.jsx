import React from 'react';
import Arrange from 'terra-arrange';
import { IconWarning } from 'terra-icon';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import styles from './IE.scss';

const cx = classNamesBind.bind(styles);

const headerClassNames = classNames(cx([
  'header',
]));

const titleElement = (
  <h1 className={cx('title')}>
    Title
  </h1>
);

const AlignedAllArrange = () => (
  <Arrange
    className={headerClassNames}
    align="center"
    fitStart={<IconWarning />}
    fitStartAttributes={{ className: cx('header-icon') }}
    fill={titleElement}
  />
);

export default AlignedAllArrange;
