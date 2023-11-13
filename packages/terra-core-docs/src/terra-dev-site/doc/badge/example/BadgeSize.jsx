import React from 'react';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeSize = () => (
  <React.Fragment>
    <p>
      The size prop can be used to change the size of Badges. The following is not an example of how to use Badges. It is only intended to illustrate the sizes that can be set. Never use size as a method to communicate meaning.
    </p>
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
  </React.Fragment>
);

export default BadgeSize;
