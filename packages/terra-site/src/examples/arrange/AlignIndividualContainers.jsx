import React from 'react';
import ArrangeAlignment from './ArrangeAlignment';
import { icon, image, simpleText } from './examplesetup';

const ArrangeExample = () => (
  <div>
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} />
    <ArrangeAlignment alignment="individual" fill={simpleText} fitEnd={icon} />
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} fitEnd={icon} />
  </div>
);

export default ArrangeExample;
