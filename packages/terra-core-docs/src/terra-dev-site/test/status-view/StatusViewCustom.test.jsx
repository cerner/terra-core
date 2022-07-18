import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/decorative/IconDiamond';
import StatusView from 'terra-status-view';

const StatusViewButtons = [
  {
    text: 'Action 1',
    key: 1,
  }, {
    text: 'Action 2',
    key: 2,
  },
];

export default () => (
  <StatusView id="statusView" title="Custom" customGlyph={<IconDiamond />} buttonAttrs={StatusViewButtons} />
);
