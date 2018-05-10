import React from 'react';
import Base from 'terra-base';
import LoadingOverlay from '../../../lib/LoadingOverlay';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <LoadingOverlay isOpen message="Custom Loading Message" id="terra-LoadingOverlay" />
  </Base>;
