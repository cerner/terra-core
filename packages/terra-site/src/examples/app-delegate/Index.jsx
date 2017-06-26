/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-app-delegate/docs/README.md';
import { version } from 'terra-clinical-app-delegate/package.json';

// Example Files

const AppDelegateExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
  </div>
);

export default AppDelegateExamples;
