import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, IconWrapper, image, simpleText } from './examplesetup';

const IndividuallyAlignedFitStart = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFitStart="center"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFitStart="bottom"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFitStart="stretch"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFitStart;
