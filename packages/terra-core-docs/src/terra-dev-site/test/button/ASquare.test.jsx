import React from 'react';
import classNames from 'classnames/bind';
import styles from './ASquare.test.module.scss';

const cx = classNames.bind(styles);

const SquareExample = () => (
  <div className={cx('content-wrapper')}>
    <p className={cx('hidden-label')} />
    <div className={cx('red-square')}>A</div>
  </div>
);

export default SquareExample;
