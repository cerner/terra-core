import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/Control.md';
import { version } from 'terra-form/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ControlSrc from '!raw-loader!terra-form/src/Control';

// Example Files
import ControlExamples from '../examples/Control';

const ControlIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ControlSrc} />
    <ControlExamples />
  </div>
);

export default ControlIndex;
