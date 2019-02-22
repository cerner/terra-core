import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Status from 'terra-status/lib/Status';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status colorClass={cx(['info'])} visuallyHiddenText="Status Info">{icon}</Status>
);

export default StatusIcon;
