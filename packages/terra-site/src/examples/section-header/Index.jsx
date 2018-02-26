/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from 'terra-section-header/docs/README.md';
import { version } from 'terra-section-header/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SectionHeaderSrc from '!raw-loader!terra-section-header/src/SectionHeader';

// Example Files
import DefaultSectionHeader from './DefaultSectionHeader';
import DefaultSectionHeaderSrc from '!raw-loader!./DefaultSectionHeader.jsx';

const SectionHeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="SectionHeader - Default"
      example={<DefaultSectionHeader />}
      exampleSrc={DefaultSectionHeaderSrc}
    />

    <PropsTable id="props" src={SectionHeaderSrc} />
  </div>
);

export default SectionHeaderExamples;
