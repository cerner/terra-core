import React from 'react';
import Status from '../../../Status';
import '../../doc/example/colors.css';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status id="status" className="high-status" visuallyHiddenText="Status High">{simpleText}</Status>
  </div>
);

export default StatusDefault;
