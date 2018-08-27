import React from 'react';
import Arrange from '../../../Arrange';
import {
  ArrangeWrapper, IconWrapper, image, simpleText,
} from './common/examplesetup';

const IndividuallyAlignedFill = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        alignFill="center"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        alignFill="bottom"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        alignFill="stretch"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default IndividuallyAlignedFill;
