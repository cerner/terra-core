import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100px', width: '100%' }} id="overlay-container">
    <Overlay isOpen isRelativeToContainer />
  </OverlayContainer>
);

export default OverlayExample;
