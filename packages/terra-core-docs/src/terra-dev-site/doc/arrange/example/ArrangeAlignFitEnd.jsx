import React from 'react';
import Arrange from 'terra-arrange';
import { alignExampleDivBlue, alignExampleDiv, simpleText } from '../common/examplesetup';

const ArrangeAlignFitStart = () => (
  <div>
    <h3>Align FitEnd - Default</h3>
    <Arrange
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h3>Align FitEnd - Center</h3>
    <Arrange
      alignFitEnd="center"
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
    <br />
    <hr />
    <h3>Align FitEnd - Bottom</h3>
    <Arrange
      alignFitEnd="bottom"
      fitStart={alignExampleDiv}
      fill={simpleText}
      fitEnd={alignExampleDivBlue}
    />
  </div>
);

export default ArrangeAlignFitStart;
