import React from 'react';
import Arrange from 'terra-arrange';
import {
  ArrangeWrapper, IconWrapper, longText,
} from './common/examplesetup';

const IndividuallyAlignedFitEnd = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        alignFitEnd="center"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        alignFitEnd="bottom"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        alignFitEnd="stretch"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFitEnd;
