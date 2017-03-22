import React from 'react';
import Status from 'terra-status';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status color="#ff0000">{simpleText}</Status>
  </div>
);

export default StatusDefault;
