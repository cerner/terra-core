import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, IconWrapper, image, simpleText } from './examplesetup';

const IndividuallyAlignedFill = () => (
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
        alignFill="center"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFill="bottom"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        alignFill="stretch"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFill;
