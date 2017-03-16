import React from 'react';
import Status from '../src/Status';
import IconDue from 'terra-icon/lib/icon/IconDue';

const icon = <IconDue height="60" width="60" />

const StatusIcon = () => (
  <Status color="#ff0000">{icon}</Status>
);

export default StatusIcon;
