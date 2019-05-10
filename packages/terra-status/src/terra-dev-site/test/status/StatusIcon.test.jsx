import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
import classNames from 'classnames/bind';
import Status from '../../../Status';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status id="statusIcon" colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">{icon}</Status>
);

export default StatusIcon;
