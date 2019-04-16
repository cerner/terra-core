import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Divider from 'terra-divider/lib/Divider';
import DividerExampleTemplate from './DividerExampleTemplate';

const currentDate = 'November 12, 1955';

const DividerCustomExample = () => (
  <DividerExampleTemplate>
    <Divider text={currentDate} />
  </DividerExampleTemplate>
);

export default DividerCustomExample;
