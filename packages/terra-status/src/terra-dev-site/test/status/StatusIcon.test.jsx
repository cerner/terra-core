import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
import Status from '../../../Status';
import '../../doc/example/colors.css';

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status id="statusIcon" className="high-status" visuallyHiddenText="Status High">{icon}</Status>
);

export default StatusIcon;
