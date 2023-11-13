import React from 'react';
import { IconBookmark } from 'terra-icon';
import Badge from 'terra-badge';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);
const Icon = <IconBookmark />;

const BadgeIcon = () => (
  <React.Fragment>
    <p>
      Icon Usage Inside Badges: The following Badge example only illustrates icons inside of Badges. When Icons are used inside of Badges, be sure to follow the guidance prescribed in the
      <a href="https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/icon/accessibility-guide"> Icon Accessibility Guide </a>
      to ensure proper use of icons. Icons within icon-only Badges must be meaningful and have a meaningful label applied via the a11yLabel prop.
    </p>
    <div className={cx('badge-container')}>
      <div className={cx('badge')}>
        <Badge icon={Icon} text="Bookmark" />
      </div>
      <div className={cx('badge')}>
        <Badge icon={Icon} text="Bookmark" isReversed />
      </div>
      <div className={cx('badge')}>
        <Badge icon={Icon} visuallyHiddenText="Bookmark" />
      </div>
    </div>
  </React.Fragment>
);

export default BadgeIcon;
