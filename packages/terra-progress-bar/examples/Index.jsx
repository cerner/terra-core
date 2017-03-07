/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ProgressBarSrc from '!raw-loader!../src/ProgressBar.jsx';
// Example Files
import ProgressBarDefault from './ProgressBarDefault';
import ProgressBarSize from './ProgressBarSize';
import ProgressBarColor from './ProgressBarColor';

const ProgressBarExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ProgressBarSrc} />
    <h2 id="default">Default</h2>
    <ProgressBarDefault />
    <h2 id="size">Size</h2>
    <ProgressBarSize />
    <h2 id="color">Color</h2>
    <ProgressBarColor />
  </div>
);

export default ProgressBarExamples;
