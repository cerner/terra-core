import React from 'react';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeVisuallyHiddenText = () => (
  <div className={cx('badge-container')}>
    <div className={cx('badge')}>
      <Badge text="Low" visuallyHiddenText="Risk Factor Low" />
    </div>
    <div className={cx('badge')}>
      <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />
    </div>
    <div className={cx('badge')}>
      <Badge text="High" visuallyHiddenText="Risk Factor High" />
    </div>
    <div className={cx('badge')}>
      <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />
    </div>
  </div>
);

export default BadgeVisuallyHiddenText;
