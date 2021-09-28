import React from 'react';
import Arrange from 'terra-arrange';
import {
  ArrangeWrapper, IconWrapper, simpleText, longText,
} from './common/examplesetup';

const AlignedAllArrange = () => (
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
        align="center"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={<IconWrapper />}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="icon-stretch"
        align="stretch"
        fitStart={<IconWrapper />}
        fill={longText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedAllArrange;
