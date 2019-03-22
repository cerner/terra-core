import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Divider from 'terra-divider/lib/Divider';
import DividerTemplate from './DividerTemplate';

const content = 'Custom divider text';

const DividerCustomExample = () => (
  <DividerTemplate>
    <Divider text={content} />
  </DividerTemplate>
);

export default DividerCustomExample;
