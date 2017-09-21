import React from 'react';
import OverlayContainer from '../../../lib/OverlayContainer';
import Overlay from '../../../lib/Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100px', width: '100%' }} id="overlay-container" >
    <Overlay isOpen isRelativeToContainer />
  </OverlayContainer>
);

export default OverlayExample;
