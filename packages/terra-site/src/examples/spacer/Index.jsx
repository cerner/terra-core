/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-spacer/docs/README.md';
import { version } from 'terra-spacer/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SpacerSrc from '!raw-loader!terra-spacer/src/Spacer';

// Example Files
import Spacer from './SpacerExample';
import SpacerResponsive from './SpacerResponsiveExample';

const SpacerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SpacerSrc} />
    <br />
    <h2 id="default">Spacer</h2>
    <br />
    <Spacer />
    <br />
    <h2 id="default">Spacer Responsive Example</h2>
    <br />
    <SpacerResponsive />
  </div>
);

export default SpacerExamples;
