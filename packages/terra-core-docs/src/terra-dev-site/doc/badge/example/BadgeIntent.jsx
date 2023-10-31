import React from 'react';
import Badge from 'terra-badge';
import Avatar from 'terra-avatar';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeIntent = () => (
  <React.Fragment>
    <p>
      Intent with severity of issues.
    </p>
    <div className={cx('badge-container')}>
      <div className={cx('badge')}>
        <Badge text="No Risk" />
      </div>
      <div className={cx('badge')}>
        <Badge intent="primary" text="Low" />
      </div>
      <div className={cx('badge')}>
        <Badge intent="secondary" text="Moderate" />
      </div>
      <div className={cx('badge')}>
        <Badge intent="warning" text="High" />
      </div>
      <div className={cx('badge')}>
        <Badge intent="negative" text="Critical" />
      </div>
    </div>
    <p>
      Secondary Intent can be used to label user name as NEW
    </p>
    <div className={cx('profile-container')}>
      <Avatar alt="Segun Adebayo" initials="SA" />
      <div className={cx('profile-name-container')}>
        <span className={cx('profile-name')}>Segun Adebayo </span>
        <br />
        <span>UI Engineer</span>
      </div>
      <div className={cx('profile-badge')}>
        <Badge intent="secondary" text="NEW" visuallyHiddenText="New User" />
      </div>
    </div>
    <p>
      Badges with read and unread items
    </p>
    <div className={cx('badge-container')}>
      <div className={cx('badge')}>
        <Badge intent="primary" text="3" />
      </div>
      <div className={cx('badge')}>
        <Badge text="3" />
      </div>
      <div className={cx('badge')}>
        <Badge intent="primary" text="240+" />
      </div>
      <div className={cx('badge')}>
        <Badge text="240+" />
      </div>
    </div>
  </React.Fragment>
);

export default BadgeIntent;
