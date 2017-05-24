/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-overlay/docs/README.md';
import { version } from 'terra-overlay/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import OverlaySrc from '!raw-loader!terra-overlay/src/Overlay';

// Example Files

const OverlayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OverlaySrc} />
  </div>
);

export default OverlayExamples;
