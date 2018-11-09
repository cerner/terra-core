import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Status from 'terra-status/lib/Status';

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status color="#ff0000" visuallyHiddenText="Status High">{simpleText}</Status>
  </div>
);

export default StatusDefault;
