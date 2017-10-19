import React from 'react';
import Arrange from '../../lib/Arrange';
import { ArrangeWrapper, longWordText } from './examplesetup';

const AlignedAllArrange = () => (
  <div>
    <ArrangeWrapper >
      <Arrange
        id="default"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ style: { maxWidth: '10px', wordWrap: 'break-word' } }}
        fillAttributes={{ style: { maxWidth: '20px', wordWrap: 'break-word' } }}
        fitEndAttributes={{ style: { maxWidth: '30px', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="center"
        align="center"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ style: { maxWidth: '10px', wordWrap: 'break-word' } }}
        fillAttributes={{ style: { maxWidth: '20px', wordWrap: 'break-word' } }}
        fitEndAttributes={{ style: { maxWidth: '30px', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ style: { maxWidth: '10px', wordWrap: 'break-word' } }}
        fillAttributes={{ style: { maxWidth: '20px', wordWrap: 'break-word' } }}
        fitEndAttributes={{ style: { maxWidth: '30px', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper >
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ style: { maxWidth: '10px', wordWrap: 'break-word' } }}
        fillAttributes={{ style: { maxWidth: '20px', wordWrap: 'break-word' } }}
        fitEndAttributes={{ style: { maxWidth: '30px', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

  </div>
);

export default AlignedAllArrange;
