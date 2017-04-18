import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, IconWrapper, image, simpleText } from './examplesetup';

const IndividuallyAlignedFitEnd = () => (
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
        alignFitEnd="center"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFitEnd="bottom"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFitEnd="stretch"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFitEnd;
