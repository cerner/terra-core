import React from 'react';

import Popup from '../../lib/Popup';

const popup = () => (
  <Popup 
    attachment="top left"
    content={<p>i'm a popup content</p>}
    enabled
    target={<p>popup button launcher</p>}
    targetAttachment="bottom left"
  >
  </Popup>);

export default popup;
