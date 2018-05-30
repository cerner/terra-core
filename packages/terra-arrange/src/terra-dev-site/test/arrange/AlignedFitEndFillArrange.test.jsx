import React from 'react';
import Arrange from '../../../Arrange';
import { ArrangeWrapper, IconWrapper, simpleText } from './common/examplesetup';

const AlignedFitEndFillArrange = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        align="center"
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fill={simpleText}
        fitEnd={<IconWrapper />}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedFitEndFillArrange;
