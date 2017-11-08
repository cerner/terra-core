/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-divider/docs/README.md';
import { version } from 'terra-divider/package.json';

// Example Files
import Divider from './DividerExample';

const DividerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="default">Divider</h2>
    <br />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    <Divider />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
  </div>
);

export default DividerExamples;
