/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-horizontal-divider/docs/README.md';
import { version } from 'terra-horizontal-divider/package.json';

// Example Files
import HorizontalDivider from './HorizontalDividerExample';

const HorizontalDividerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="default">Horizontal Divider</h2><br /><HorizontalDivider />
  </div>
);

export default HorizontalDividerExamples;
