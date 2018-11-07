import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
import Status from '../../../Status';

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status id="statusIcon" color="#ff0000" visuallyHiddenText="Status High">{icon}</Status>
);

export default StatusIcon;
