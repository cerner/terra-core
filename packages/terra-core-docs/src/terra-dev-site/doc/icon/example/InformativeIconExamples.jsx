import React from 'react';
import classNames from 'classnames/bind';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';
import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);
const className = cx('example');

const InformativeIconExamples = () => (
  <>
    <div className={className}>
      <IconManufacturer title="Manufactured by" />
      &nbsp;
      2800 Rock Creek Pkwy Kansas City, MO 64117
    </div>
    <div className={className}>
      <IconAnnouncement title="Announcement" />
      {' '}
      Facilities will closed on Monday.
    </div>
  </>
);

export default InformativeIconExamples;
