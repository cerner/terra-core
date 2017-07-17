import React from 'react';

import Overlay from '../../../lib/Overlay';

const OverlayExample = () => (
  <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.LIGHT} >
    <h1>Light Overlay</h1>
  </Overlay>
);

export default OverlayExample;
