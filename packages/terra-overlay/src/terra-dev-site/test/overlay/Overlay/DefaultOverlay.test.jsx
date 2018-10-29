import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100%', width: '100%' }} id="terra-OverlayContainer">
    <Overlay isOpen id="default-overlay" isRelativeToContainer />
  </OverlayContainer>
);

export default OverlayExample;
