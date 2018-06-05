import React from 'react';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from '../../../StatusView';

export default () =>
  <StatusView id="statusView" title="Custom" variant="custom" customGlyph={<IconDiamond />} />;
