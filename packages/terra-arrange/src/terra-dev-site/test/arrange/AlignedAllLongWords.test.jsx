import React from 'react';
import Arrange from '../../../Arrange';
import { ArrangeWrapper, longWordText } from './common/examplesetup';

const AlignedAllArrange = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        id="default"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ className: 'test1', style: { width: '35%', wordWrap: 'break-word' } }}
        fillAttributes={{ className: 'test2', style: { width: '30%', wordWrap: 'break-word' } }}
        fitEndAttributes={{ className: 'test3', style: { width: '35%', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="center"
        align="center"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ className: 'test1', style: { width: '35%', wordWrap: 'break-word' } }}
        fillAttributes={{ className: 'test2', style: { width: '30%', wordWrap: 'break-word' } }}
        fitEndAttributes={{ className: 'test3', style: { width: '35%', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="bottom"
        align="bottom"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ className: 'test1', style: { width: '35%', wordWrap: 'break-word' } }}
        fillAttributes={{ className: 'test2', style: { width: '30%', wordWrap: 'break-word' } }}
        fitEndAttributes={{ className: 'test3', style: { width: '35%', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

    <ArrangeWrapper>
      <Arrange
        id="stretch"
        align="stretch"
        fitStart={longWordText}
        fill={longWordText}
        fitEnd={longWordText}
        fitStartAttributes={{ className: 'test1', style: { width: '35%', wordWrap: 'break-word' } }}
        fillAttributes={{ className: 'test2', style: { width: '30%', wordWrap: 'break-word' } }}
        fitEndAttributes={{ className: 'test3', style: { width: '35%', wordWrap: 'break-word' } }}
      />
    </ArrangeWrapper>

  </div>
);

export default AlignedAllArrange;
