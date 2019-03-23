import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Divider from 'terra-divider/lib/Divider';
import DividerTemplate from './DividerTemplate';

const content = 'Custom Divider Text';

const DividerCustomExample = () => (
  <Divider text={content} />
);

export default DividerTemplate(DividerCustomExample);
