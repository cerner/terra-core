import React from 'react';
import classNames from 'classnames/bind';
import Status from 'terra-status';
import styles from '../../doc/status/example/colors.module.scss';

const cx = classNames.bind(styles);

const simpleText = <div className={cx('text-wrapper')}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status id="status" colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">{simpleText}</Status>
  </div>
);

export default StatusDefault;
