import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
import Status from 'terra-status';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status colorClass={cx(['info'])} visuallyHiddenText="Status Info">{icon}</Status>
);

export default StatusIcon;
