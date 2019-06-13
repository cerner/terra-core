import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const StatusViewButtons = [
  {
    text: 'Action 1',
    size: 'medium',
  }, {
    text: 'Action 2',
    size: 'medium',
  },
];

const Custom = (
  <StatusView
    message="Custom Message"
    customGlyph={<IconDiamond />}
    title="Custom Title"
    buttonAttrs={StatusViewButtons}
  />
);

export default Custom;
