/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application/docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions

const ApplicationExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Application</h2>
    <div>
      <h1>Terra Application</h1>
      <p>Content would go here!</p>
    </div>
  </div>
);

export default ApplicationExamples;
