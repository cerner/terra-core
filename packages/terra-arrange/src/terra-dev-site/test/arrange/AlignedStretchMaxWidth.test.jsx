import React from 'react';
import Arrange from '../../../Arrange';
import {
  ArrangeWrapper, icon, image, simpleText,
} from './common/examplesetup';

const AlignedStretchMaxWidth = () => (
  <div>
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        fitEnd={icon}
        alignFitStart="stretch"
        alignFill="stretch"
        alignFitEnd="stretch"
        fitStartAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden' } }}
        fillAttributes={{ style: { wordWrap: 'break-word', maxWidth: '20%' } }}
        fitEndAttributes={{
          style: {
            maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden', backgroundColor: 'yellow',
          },
        }}
      />
    </ArrangeWrapper>
  </div>
);

export default AlignedStretchMaxWidth;
