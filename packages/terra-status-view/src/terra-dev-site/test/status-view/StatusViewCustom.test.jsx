import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from '../../../StatusView';

const StatusViewButtons = [
  {
    text: 'Action 1',
    key: 1,
    size: 'medium',
  }, {
    text: 'Action 2',
    key: 2,
    size: 'medium',
  },
];

export default () => (
  <StatusView id="statusView" title="Custom" customGlyph={<IconDiamond />} buttonAttrs={StatusViewButtons} />
);
