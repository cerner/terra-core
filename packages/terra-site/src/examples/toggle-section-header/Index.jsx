/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggle-section-header/docs/README.md';
import { version } from 'terra-toggle-section-header/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ToggleSectionHeaderSrc from '!raw-loader!terra-toggle-section-header/src/ToggleSectionHeader';

// Example Files
import DefaultToggleSectionHeader from './DefaultToggleSectionHeader';
import AnimatedToggleSectionHeader from './AnimatedToggleSectionHeader';

const Examples = () => (
  <div>
    <h2>Examples</h2>
    <DefaultToggleSectionHeader />
    <AnimatedToggleSectionHeader />
  </div>
);

const ToggleSectionHeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ToggleSectionHeaderSrc} />
    <Examples />
  </div>
);

export default ToggleSectionHeaderExamples;
