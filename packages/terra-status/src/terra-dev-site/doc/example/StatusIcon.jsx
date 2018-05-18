import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import IconDue from 'terra-icon/lib/icon/IconDue';
import Status from 'terra-status';

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status color="#ff0000">{icon}</Status>
);

export default StatusIcon;
