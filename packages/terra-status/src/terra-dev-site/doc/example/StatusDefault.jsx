import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Status from 'terra-status/lib/Status';
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
