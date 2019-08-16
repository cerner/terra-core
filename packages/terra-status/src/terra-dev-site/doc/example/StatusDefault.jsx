import React from 'react';
import Status from 'terra-status';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const simpleText = <div className={cx('text-wrapper')}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status colorClass={cx(['success'])} visuallyHiddenText="Status Success">{simpleText}</Status>
  </div>
);

export default StatusDefault;
