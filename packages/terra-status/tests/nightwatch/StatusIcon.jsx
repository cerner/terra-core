import React from 'react';
import Status from '../../lib/Status';

const icon = (<svg className="terra-Icon" height="4em" width="4em" viewBox="0 0 48 48">
  <path d="M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z" fill="#FFF" />
</svg>);

const StatusIcon = () => (
  <Status id="statusIcon" color="#ff0000">{icon}</Status>
);

export default StatusIcon;
