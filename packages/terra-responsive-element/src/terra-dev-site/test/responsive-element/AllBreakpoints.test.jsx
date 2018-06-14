import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const DefaultExample = () => (
  <ResponsiveElement
    defaultElement={<div>Default</div>}
    tiny={<div>Tiny</div>}
    small={<div>Small</div>}
    medium={<div>Medium</div>}
    large={<div>Large</div>}
    huge={<div>Huge</div>}
  />
);

export default DefaultExample;
