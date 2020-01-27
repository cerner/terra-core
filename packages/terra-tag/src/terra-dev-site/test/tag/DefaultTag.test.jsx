import React from 'react';
import classNames from 'classnames/bind';
import Tag from '../../../Tag';
import styles from './TagTestCommon.module.scss';

const cx = classNames.bind(styles);
const DefaultTag = () => (
  <div className={cx('tag-wrapper')}>
    <Tag
      id="default"
      text="Default Tag"
    />
  </div>
);
export default DefaultTag;
