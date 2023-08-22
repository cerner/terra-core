import React from 'react';
import Arrange from 'terra-arrange';
import { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';

const ArrangeAlignFill = () => (
  <div>
    <h3>Align Fill - Default</h3>
    <Arrange
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align Fill - Center</h3>
    <Arrange
      alignFill="center"
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
    <br />
    <hr />
    <h3>Align Fill - Bottom</h3>
    <Arrange
      alignFill="bottom"
      fitStart={alignExampleDiv}
      fill={textWithBlueBorder}
      fitEnd={alignExampleDiv}
    />
  </div>
);

export default ArrangeAlignFill;
