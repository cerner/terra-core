import React from 'react';
import Status from '../../../Status';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status id="status" color="#ff0000" visuallyHiddenText="Status High">{simpleText}</Status>
  </div>
);

export default StatusDefault;
