/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggler/docs/README.md';
import { version } from 'terra-toggler/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TogglerSrc from '!raw-loader!terra-toggler/src/Toggler';

// Example Files
import DefaultToggler from './DefaultToggler';
import AnimatedToggler from './AnimatedToggler';

const TogglerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TogglerSrc} />
    <h2 id="default">Default Toggler</h2>
    <DefaultToggler />
    <h2 id="animated">Animated Toggler</h2>
    <AnimatedToggler />
  </div>
);

export default TogglerExamples;
