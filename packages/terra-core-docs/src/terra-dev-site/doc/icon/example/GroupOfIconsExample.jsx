import React from 'react';
import classNames from 'classnames/bind';
import IconFeatured from 'terra-icon/lib/icon/IconFeatured';
import IconHalfRating from 'terra-icon/lib/icon/IconHalfRating';
import IconFeaturedOff from 'terra-icon/lib/icon/IconFeaturedOff';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);
const className = cx('example');

const GroupOfIconsExample = () => (
  <dl className={className}>
    <dt>Rating:</dt>
    <dd>
      <IconFeatured title="Three and a half stars out of five" />
      <IconFeatured role="presentation" />
      <IconFeatured role="presentation" />
      <IconHalfRating role="presentation" />
      <IconFeaturedOff role="presentation" />
    </dd>
  </dl>
);

export default GroupOfIconsExample;
