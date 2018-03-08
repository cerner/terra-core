/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from 'terra-toggle-section-header/docs/README.md';
import { version } from 'terra-toggle-section-header/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ToggleSectionHeaderSrc from '!raw-loader!terra-toggle-section-header/src/ToggleSectionHeader';

// Example Files
import DefaultToggleSectionHeader from './DefaultToggleSectionHeader';
import DefaultToggleSectionHeaderSrc from '!raw-loader!./DefaultToggleSectionHeader.jsx';

const ToggleSectionHeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="ToggleSectionHeader - Default"
      example={<DefaultToggleSectionHeader />}
      exampleSrc={DefaultToggleSectionHeaderSrc}
    />

    <PropsTable id="props" src={ToggleSectionHeaderSrc} />
  </div>
);

export default ToggleSectionHeaderExamples;
