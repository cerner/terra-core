import React from 'react';
import StatusView from 'terra-status-view';

const StatusViewButtons = [
  {
    text: 'OK',
    key: 1,
    id: 'button1',
  }, {
    text: 'Cancel',
    key: 2,
    id: 'button2',
  },
];

export default () => (
  <StatusView id="statusView" variant="error" title="500" message="An exception was thrown." buttonAttrs={StatusViewButtons} />
);
