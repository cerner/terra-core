import React from 'react';
import Base from 'terra-base';
import OverlayContainer from '../../../lib/OverlayContainer';
import LoadingOverlay from '../../../lib/LoadingOverlay';


const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <OverlayContainer style={{ height: '100px', width: '100%' }} >
      <LoadingOverlay isOpen isRelativeToContainer />
    </OverlayContainer>
  </Base>;
