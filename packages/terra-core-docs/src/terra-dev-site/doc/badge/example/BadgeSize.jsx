import React from 'react';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeSize = () => (
  <div className={cx('badge-container')}>
    <div className={cx('badge')}>
      <Badge size="tiny" text="Tiny" />
    </div>
    <div className={cx('badge')}>
      <Badge size="small" text="Small" />
    </div>
    <div className={cx('badge')}>
      <Badge size="medium" text="Medium" />
    </div>
    <div className={cx('badge')}>
      <Badge size="large" text="Large" />
    </div>
    <div className={cx('badge')}>
      <Badge size="huge" text="Huge" />
    </div>
  </div>
);

export default BadgeSize;
