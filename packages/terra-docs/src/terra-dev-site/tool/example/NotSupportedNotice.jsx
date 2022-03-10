import React from 'react';
import { Notice } from '@cerner/terra-docs';
import MdxSampleText from './NotSupportedMdxSampleText.mdx';

export default () => (
  <Notice variant="not-supported" ariaLevel="3">

    <MdxSampleText />

  </Notice>
);
