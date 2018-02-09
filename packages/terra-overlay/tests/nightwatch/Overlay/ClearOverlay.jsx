import React from 'react';

import Overlay from '../../../lib/Overlay';
import OverlayContainer from '../../../lib/OverlayContainer';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100%', width: '100%' }}>
    <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.CLEAR} id="clear-overlay" >
      <h1>Clear Overlay</h1>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
