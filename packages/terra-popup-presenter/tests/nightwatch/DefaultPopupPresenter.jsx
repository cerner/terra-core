import React from 'react';

import Popup from '../../lib/PopupPresenter';

const popup = () => (
  <PopupPresenter 
    attachment="top left"
    content={<p>i'm a popup content</p>}
    enabled
    target={<p>popup button launcher</p>}
    targetAttachment="bottom left"
  />
);

export default popup;
