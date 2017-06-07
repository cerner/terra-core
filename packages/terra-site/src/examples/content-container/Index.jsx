/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-content-container/docs/README.md';
import { version } from 'terra-content-container/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ContentContainerSrc from '!raw-loader!terra-content-container/src/ContentContainer.jsx';
// Example Files
import ContentContainerStandard from './ContentContainerStandard';
import ContentContainerFill from './ContentContainerFill';

const ContentContainerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ContentContainerSrc} />
    <h2 id="standard">Standard Container</h2>
    <ContentContainerStandard />
    <h2 id="outline-variant">Fill Container</h2>
    <ContentContainerFill />
  </div>
);

export default ContentContainerExamples;
