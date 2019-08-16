import React from 'react';
import classNames from 'classnames/bind';
import Divider from '../../../Divider';
import styles from './DividerTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <div className={cx('separator')} />
    <Divider id="divider" text="Custom Divider Text" />
    <div className={cx('separator')} />
  </div>
);
