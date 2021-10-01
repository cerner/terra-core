import React from 'react';
import Arrange from 'terra-arrange';
import {
  ArrangeWrapper, IconWrapper, simpleText,
} from './common/examplesetup';

const IndividuallyAlignedFill = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        alignFill="center"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        alignFill="bottom"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        alignFill="stretch"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFill;
