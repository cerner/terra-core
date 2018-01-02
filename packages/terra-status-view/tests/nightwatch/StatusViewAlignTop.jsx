import React from 'react';
import Base from 'terra-base';
import StatusView from '../../lib/StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <StatusView role="main" id="statusView" variant={StatusView.variants.NOMATCHINGRESULTS} style={{ border: '1px solid black', height: '500px' }} isAlignedTop />
  </Base>;
