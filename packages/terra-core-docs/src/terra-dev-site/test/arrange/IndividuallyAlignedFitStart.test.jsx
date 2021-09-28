import React from 'react';
import Arrange from 'terra-arrange';
import {
  ArrangeWrapper, IconWrapper, longText,
} from './common/examplesetup';

const IndividuallyAlignedFitStart = () => (
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
        alignFitStart="center"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        alignFitStart="bottom"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        alignFitStart="stretch"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFitStart;
