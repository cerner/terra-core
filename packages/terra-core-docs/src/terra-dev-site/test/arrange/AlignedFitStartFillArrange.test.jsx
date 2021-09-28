import React from 'react';
import Arrange from 'terra-arrange';
import { ArrangeWrapper, IconWrapper, simpleText } from './common/examplesetup';

const AlignedFitStartFillArrange = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={<IconWrapper />}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        align="center"
        fitStart={<IconWrapper />}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={<IconWrapper />}
        fill={simpleText}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={<IconWrapper />}
        fill={simpleText}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedFitStartFillArrange;
