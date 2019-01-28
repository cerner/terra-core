import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Status from 'terra-status/lib/Status';
import './colors.css';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status className="high-status" visuallyHiddenText="Status High">{simpleText}</Status>
  </div>
);

export default StatusDefault;
