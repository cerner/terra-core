import React from 'react';
import Arrange from 'terra-arrange';
import { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';

const ArrangeAlignFitStart = () => (
  <div>
    <h3>Align FitStart - Default</h3>
    <Arrange
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align FitStart - Center</h3>
    <Arrange
      alignFitStart="center"
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align FitStart - Bottom</h3>
    <Arrange
      alignFitStart="bottom"
      fitStart={alignExampleDivBlue}
      fill={simpleText}
      fitEnd={alignExampleDiv}
    />
  </div>
);

export default ArrangeAlignFitStart;
