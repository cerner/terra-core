/* eslint-disable no-alert */
import React from 'react';
import classNames from 'classnames/bind';
import Tag from '../../../Tag';
import styles from './TagTestCommon.module.scss';

const cx = classNames.bind(styles);

const OnClickTag = () => (
  <div className={cx('tag-wrapper')}>
    <Tag
      id="on-click"
      text="Clickable Tag"
      onClick={() => window.alert('Tag has been clicked!')}
    />
  </div>
);

export default OnClickTag;
