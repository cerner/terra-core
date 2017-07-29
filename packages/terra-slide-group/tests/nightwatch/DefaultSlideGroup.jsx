import React from 'react';

import SlideGroup from '../../lib/SlideGroup';

export default () => (
  <SlideGroup
    style={{ height: '200px' }}
    items={[
      <div className="slide1" key="1">Slide 1</div>,
      <div className="slide2" key="2">Slide 2</div>,
    ]}
    isAnimated
    id="SlideGroup"
  />
);
