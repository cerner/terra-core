import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, image, simpleText } from './examplesetup';

const AlignedFitStartFillArrange = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        align="center"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        align="bottom"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        align="stretch"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedFitStartFillArrange;
