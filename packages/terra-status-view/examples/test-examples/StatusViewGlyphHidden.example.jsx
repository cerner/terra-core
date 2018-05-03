import React from 'react';
import Base from 'terra-base';
import StatusView from '../../lib/StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <StatusView id="statusView" variant={StatusView.Opts.variants.ERROR} isGlyphHidden />
  </Base>;
