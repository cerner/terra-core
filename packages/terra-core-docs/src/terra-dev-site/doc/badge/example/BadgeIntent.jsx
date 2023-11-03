import React from 'react';
import Badge from 'terra-badge';
import Avatar from 'terra-avatar';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeIntent = () => (
  <React.Fragment>
    <p>
      The Intent prop can be used to apply colors to badges. Please refer to the important Accessibility Guidance sections above to ensure proper usage.
    </p>
    <p>
      An example usage of the “Intent” Badge:
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
    <br />
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
  </React.Fragment>
);

export default BadgeIntent;
