import React from 'react';
import Arrange from 'terra-arrange';
import { icon, image, simpleText } from './examplesetup';

const ArrangeExample = () => (
  <Arrange
    fitStart={image}
    fill={simpleText}
    fitEnd={icon}
    alignFitStart={'stretch'}
    alignFill={'stretch'}
    alignFitEnd={'stretch'}
    fitStartAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden' } }}
    fillAttributes={{ style: { wordWrap: 'break-word', maxWidth: '20%' } }}
    fitEndAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden', backgroundColor: 'yellow' } }}
  />
);

export default ArrangeExample;
