import React from 'react';
import Badge from 'terra-badge';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeVisuallyHiddenText = () => (
  <React.Fragment>
    <p>
      <strong>Ensuring Programmatic Context Badge Example: </strong>
      When a Badge is paired with a word or item but not semantically understood as grouped with that word, add use the word or words as the visually hidden text string as illustrated in the following example.
    </p>
    <div className={cx('badge-container')}>
      <span className={cx('profile-badge')}>
        Heart Rate
      </span>
      <div className={cx('badge')}>
        <Badge text="High" intent="warning" visuallyHiddenText="Heart Rate" />
      </div>
    </div>
    <div className={cx('badge-container')}>
      <span className={cx('profile-badge')}>
        Blood Pressure
      </span>
      <div className={cx('badge')}>
        <Badge text="Critical" intent="negative" visuallyHiddenText="Blood Pressure" />
      </div>
    </div>
    <p>
      <strong> Add Additional Context to a Badge Example: </strong>
      Use the VisuallyHiddenText prop to provide additional context that sighted users can see but may make the content more meaningful and better understood by screen reader users.
    </p>
    <div>
      <Button icon={<span><Badge intent="primary" text="20" size="small" visuallyHiddenText="unread messages" /></span>} text="Mailbox" isReversed />
    </div>
  </React.Fragment>
);

export default BadgeVisuallyHiddenText;
