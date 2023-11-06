import React from 'react';
import Badge from 'terra-badge';
import Avatar from 'terra-avatar';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeIntent = () => (
  <React.Fragment>
    <p>
      The Intent prop can be used to apply colors to badges. Please refer to the
      <strong> VisuallyHiddenText prop examples further below </strong>
      to ensure proper
      <strong> context is provided for assistive technology users to understand the purpose of the badge. </strong>
    </p>
    <p>
      Intent Badge Colors: The following Badge example only illustrates badge colors. This example is not intended to illustrate how Badges should be used. As noted above, multiple badges should not be used together. Instead, see Pills or Tag.
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
      Example usage of the Intent Badge. Please note that this use case does not require the VisuallyHiddenText prop because the badge is visually and programmatically grouped in a semantic container. Other use cases will require the VisuallyHiddenText prop. To effectively communicate context to assistive technology users.
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
  </React.Fragment>
);

export default BadgeIntent;
