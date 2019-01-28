import React from 'react';
import IconDue from 'terra-icon/lib/icon/IconDue';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Status from 'terra-status/lib/Status';
import './colors.css';

const icon = <IconDue height="60" width="60" />;

const StatusIcon = () => (
  <Status className="high-status" visuallyHiddenText="Status High">{icon}</Status>
);

export default StatusIcon;
