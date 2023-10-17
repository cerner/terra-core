import React from 'react';
import { IconBookmark } from 'terra-icon';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);
const Icon = <IconBookmark />;

const BadgeIcon = () => (
  <div className={cx('badge-container')}>
    <div className={cx('badge')}>
      <Badge icon={Icon} text="icon" />
    </div>
    <div className={cx('badge')}>
      <Badge icon={Icon} text="icon" isReversed />
    </div>
    <div className={cx('badge')}>
      <Badge icon={Icon} visuallyHiddenText="Save" />
    </div>
  </div>
);

export default BadgeIcon;
