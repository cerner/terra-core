import React from 'react';
import Status from '../../lib/Status';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusNoColor = () => (
  <div>
    <Status id="statusNoColor">{simpleText}</Status>
  </div>
);

export default StatusNoColor;
