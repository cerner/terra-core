import React from 'react';
import Base from 'terra-base';
import OverlayContainer from '../../../../OverlayContainer';
import LoadingOverlay from '../../../../LoadingOverlay';


const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <OverlayContainer style={{ height: '100px', width: '100%' }} >
      <LoadingOverlay isOpen isRelativeToContainer id="terra-LoadingOverlay" />
    </OverlayContainer>
  </Base>;
