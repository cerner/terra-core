import React from 'react';

import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.DARK} id="dark-overlay">
    <h1>Dark Overlay</h1>
  </Overlay>
);

export default OverlayExample;
