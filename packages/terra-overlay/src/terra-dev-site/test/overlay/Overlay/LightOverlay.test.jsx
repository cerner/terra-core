import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100%', width: '100%' }} id="terra-OverlayContainer">
    <Overlay isOpen isRelativeToContainer backgroundStyle={Overlay.Opts.BackgroundStyles.LIGHT} id="light-overlay">
      <h1>Light Overlay</h1>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
