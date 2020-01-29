import React from 'react';
import classNames from 'classnames/bind';
import styles from './FixedHeight.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const FixedHeight = ({ children }) => (
  <div className={cx('container')}>
    {children}
  </div>
);

export default FixedHeight;
