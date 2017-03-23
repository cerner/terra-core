import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application/docs/README.md';

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
