import React from 'react';
import SectionDivider from 'terra-divider/src/_SectionDivider';
import DividerExampleTemplate from './DividerExampleTemplate';

const currentDate = 'November 12, 1955';

const DividerCustomExample = () => (
  <DividerExampleTemplate>
    <SectionDivider text={currentDate} level={3} />
  </DividerExampleTemplate>
);

export default DividerCustomExample;
