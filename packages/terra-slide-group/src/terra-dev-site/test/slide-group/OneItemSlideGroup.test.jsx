import React from 'react';
import SlideGroup from '../../../SlideGroup';

export default () => (
  <SlideGroup
    style={{ height: '200px' }}
    items={[
      <div className="slide1" key="1">Slide 1</div>,
    ]}
    id="SlideGroup"
  />
);
