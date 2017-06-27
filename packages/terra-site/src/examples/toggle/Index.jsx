/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggle/docs/README.md';
import { version } from 'terra-toggle/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ToggleSrc from '!raw-loader!terra-toggle/src/Toggle';

// Example Files
import DefaultToggle from './DefaultToggle';
import AnimatedToggle from './AnimatedToggle';

const ToggleExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ToggleSrc} />
    <h2 id="default">Default Toggle</h2>
    <DefaultToggle />
    <h2 id="animated">isAnimated Toggle</h2>
    <AnimatedToggle />
  </div>
);

export default ToggleExamples;
