import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export default props => (
  <div
    className={cx('card')}
    {...props}
  />
);
