import React from 'react';
import classNames from 'classnames/bind';
import styles from './Fixed.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const Fixed = ({ children }) => (
  <div className={cx('container')}>
    {children}
  </div>
);

export default Fixed;
