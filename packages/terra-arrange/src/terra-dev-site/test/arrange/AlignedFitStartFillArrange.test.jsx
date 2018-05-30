import React from 'react';
import Arrange from '../../../Arrange';
import { ArrangeWrapper, image, simpleText } from './common/examplesetup';

const AlignedFitStartFillArrange = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        align="center"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={image}
        fill={simpleText}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedFitStartFillArrange;
