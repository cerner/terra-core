import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-progress-bar/docs/README.md';
import { version } from 'terra-progress-bar/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ProgressBarSrc from '!raw-loader!terra-progress-bar/src/ProgressBar';

// Example Files
import ProgressBarDefault from './ProgressBarDefault';
import ProgressBarSize from './ProgressBarSize';
import ProgressBarColor from './ProgressBarColor';

const ProgressBarExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ProgressBarSrc} />
    <h2 id="default">Default</h2>
    <ProgressBarDefault />
    <br />
    <br />
    <h2 id="size">Size</h2>
    <ProgressBarSize />
    <br />
    <br />
    <h2 id="color">Color</h2>
    <ProgressBarColor />
  </div>
);

export default ProgressBarExamples;
