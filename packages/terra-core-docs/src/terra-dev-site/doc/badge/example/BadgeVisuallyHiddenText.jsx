import React from 'react';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeVisuallyHiddenText = () => (
  <React.Fragment>
    <div className={cx('badge-container')}>
      <div className={cx('badge')}>
        <Badge text="Low" visuallyHiddenText="Risk" />
      </div>
      <div className={cx('badge')}>
        <Badge text="Medium" visuallyHiddenText="Risk" />
      </div>
      <div className={cx('badge')}>
        <Badge text="High" visuallyHiddenText="Risk" />
      </div>
      <div className={cx('badge')}>
        <Badge text="Critical" visuallyHiddenText="Risk" />
      </div>
    </div>
    <p>
      An example usage of Badge for the count of unread items using the Visually Hidden Text and Size props:
    </p>
    <div>
      <button type="button">
        <span>Mailbox</span>
        <span className={cx('message-count')}>
          <Badge intent="primary" text="20" size="small" visuallyHiddenText="unread messages" />
        </span>
      </button>
    </div>
  </React.Fragment>
);

export default BadgeVisuallyHiddenText;
