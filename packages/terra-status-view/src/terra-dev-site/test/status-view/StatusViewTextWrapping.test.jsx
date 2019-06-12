import React from 'react';
import StatusView from '../../../StatusView';

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. AnIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyLongWord.';
const StatusViewButtons = [
  {
    text: ipsum,
    key: 1,
    id: 'button1',
  }, {
    text: ipsum,
    key: 2,
    id: 'button2',
  },
];

export default () => (
  <div style={{ maxWidth: '500px', border: '1px black solid' }}>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum} buttonAttrs={StatusViewButtons} />
  </div>
);
