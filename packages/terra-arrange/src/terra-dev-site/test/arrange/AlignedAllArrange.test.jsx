import React from 'react';
import Arrange from '../../../Arrange';
import {
  ArrangeWrapper, IconWrapper, image, simpleText, longText,
} from './common/examplesetup';

const AlignedAllArrange = () => (
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
        align="center"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={image}
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={image}
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
