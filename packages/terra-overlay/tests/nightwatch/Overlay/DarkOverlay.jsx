import React from 'react';

import Overlay from '../../../lib/Overlay';

const OverlayExample = () => (
  <Overlay isOpen backgroundStyle={Overlay.BackgroundStyles.DARK} >
    <h1>Dark Overlay</h1>
  </Overlay>
);

export default OverlayExample;
