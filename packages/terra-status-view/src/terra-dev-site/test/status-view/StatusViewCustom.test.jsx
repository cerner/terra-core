import React from 'react';
import Base from 'terra-base';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from '../../../StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <StatusView id="statusView" title="Custom" variant="custom" customGlyph={<IconDiamond />} />
  </Base>;
