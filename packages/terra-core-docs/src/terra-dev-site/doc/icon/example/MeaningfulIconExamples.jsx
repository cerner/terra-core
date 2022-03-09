import React from 'react';
import classNames from 'classnames/bind';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';
import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);
const className = cx('example');

const MeaningfulIconExamples = () => (
  <>
    <p className={className}>
      <IconManufacturer title="Manufactured by" />
      &nbsp;
      2800 Rock Creek Pkwy Kansas City, MO 64117
    </p>
    <a href="https://example.com/" target="_blank" rel="noreferrer" className={className}>
      <IconAnnouncement title="Announcement" height="2em" width="2em" />
      {' '}
      Facilities will closed on Monday.
    </a>
  </>
);

export default MeaningfulIconExamples;
