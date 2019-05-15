import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import LoadingOverlay from '../../../../LoadingOverlay';

export default () => (
  <OverlayContainer
    style={{ height: '100px', width: '100%' }}
    overlay={<LoadingOverlay isOpen isRelativeToContainer id="terra-LoadingOverlay" />}
  />
);
