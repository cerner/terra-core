import React from 'react';

import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.LIGHT} id="light-overlay">
    <h1>Light Overlay</h1>
  </Overlay>
);

export default OverlayExample;
