import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from 'terra-status-view';

const StatusViewButtons = [
  {
    text: 'Action 1',
    size: 'medium',
    key: 1,
  }, {
    text: 'Action 2',
    size: 'medium',
    key: 2,
  },
];

const Custom = () => (
  <StatusView
    message="Custom Message"
    customGlyph={<IconDiamond />}
    title="Custom Title"
    buttonAttrs={StatusViewButtons}
  />
);

export default Custom;
