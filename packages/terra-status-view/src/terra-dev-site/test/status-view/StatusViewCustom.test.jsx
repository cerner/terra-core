import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from '../../../StatusView';

export default () => (
  <div>
    <StatusView id="statusView" title="Custom" customGlyph={<IconDiamond />} />
  </div>
);
