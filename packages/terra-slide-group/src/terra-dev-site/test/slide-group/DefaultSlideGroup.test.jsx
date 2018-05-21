import React from 'react';
import SlideGroup from '../../../SlideGroup';

export default () => (
  <div>
    <p>A slide group will display the last item supplied. Checking the DOM, one can see two items are present.</p>
    <SlideGroup
      style={{ height: '200px' }}
      items={[
        <div className="slide1" key="1">Slide 1</div>,
        <div className="slide2" key="2">Slide 2</div>,
      ]}
      id="SlideGroup"
    />
  </div>
);
