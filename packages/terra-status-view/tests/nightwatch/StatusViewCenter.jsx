import React from 'react';
import Base from 'terra-base';
import StatusView from '../../lib/StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <StatusView id="statusView" variant={StatusView.Opts.variants.NODATA} style={{ border: '1px solid black', height: '500px' }} />
  </Base>;
