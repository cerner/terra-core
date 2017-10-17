import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, IconWrapper, longWordText } from './examplesetup';

const AlignedAllArrange = () => (
  <div>
    <ArrangeWrapper >
      <Arrange
        id="default"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartMaxWidth={'20%'}
        fitEndMaxWidth={'100px'}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="center"
        align="center"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartMaxWidth={'20%'}
        fitEndMaxWidth={'100px'}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartMaxWidth={'20%'}
        fitEndMaxWidth={'100px'}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartMaxWidth={'20%'}
        fitEndMaxWidth={'100px'}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="icon-stretch"
        align="stretch"
        fitStart={<IconWrapper />}
        fill={longWordText}
        fitEnd={<IconWrapper />}
        fitStartMaxWidth={'20%'}
        fitEndMaxWidth={'100px'}
      />
    </ArrangeWrapper>

  </div>
);

export default AlignedAllArrange;
