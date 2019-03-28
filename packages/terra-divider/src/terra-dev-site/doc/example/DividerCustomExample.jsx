import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Divider from 'terra-divider/lib/Divider';
import DividerExampleTemplate from './DividerExampleTemplate';

const content = 'Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text Custom Divider Text';

const DividerCustomExample = () => (
  <DividerExampleTemplate>
    <Divider text={content} />
  </DividerExampleTemplate>
);

export default DividerCustomExample;
