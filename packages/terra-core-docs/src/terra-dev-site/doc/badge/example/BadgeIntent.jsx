import React from 'react';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeIntent = () => (
  <div className={cx('badge-container')}>
    <div className={cx('badge')}>
      <Badge text="Patient Arrival" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="primary" text="Admitted" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="secondary" text="Discharged" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="positive" text="Recovery" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="negative" text="Complications" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="warning" text="Urgent" />
    </div>
    <div className={cx('badge')}>
      <Badge intent="info" text="Medical Notes" />
    </div>
  </div>
);

export default BadgeIntent;
