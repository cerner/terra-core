import React from 'react';
import classNames from 'classnames/bind';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';
import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);
const className = cx('example');

const DecorativeIconExamples = () => (
  <>
    <p className={className}>
      <IconManufacturer />
      &nbsp;
      Manufactured by 2800 Rock Creek Pkwy Kansas City, MO 64117
    </p>
    <a href="https://example.com/" target="_blank" rel="noreferrer" className={className}>
      <IconAnnouncement height="2em" width="2em" />
      {' '}
      Announcement: Facilities will closed on Monday.
    </a>
  </>
);

export default DecorativeIconExamples;
