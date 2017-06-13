import React from 'react';
import OverlayContainer from '../../../lib/OverlayContainer';
import LoadingOverlay from '../../../lib/LoadingOverlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100px', width: '100%' }} >
    <LoadingOverlay isOpen isRelativeToContainer />
  </OverlayContainer>
);

export default OverlayExample;
