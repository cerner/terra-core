import React from 'react';
import Divider from 'terra-divider';
import DividerExampleTemplate from './DividerExampleTemplate';

const currentDate = 'November 12, 1955';

const DividerCustomExample = () => (
  <DividerExampleTemplate>
    <Divider text={currentDate} />
  </DividerExampleTemplate>
);

export default DividerCustomExample;
