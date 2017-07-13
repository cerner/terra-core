import React from 'react';
import Base from 'terra-base';
import LoadingOverlay from '../../../lib/LoadingOverlay';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <LoadingOverlay isOpen backgroundStyle={LoadingOverlay.Opts.BackgroundStyles.DARK} />
  </Base>;
