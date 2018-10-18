import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100%', width: '100%' }} id="terra-OverlayContainer">
    <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.DARK} id="dark-overlay" isRelativeToContainer>
      <h1>Dark Overlay</h1>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
