import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/Input.md';
import { version } from 'terra-form/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import InputSrc from '!raw-loader!terra-form/src/Input';

// Example Files
import InputExamples from '../examples/Input';

const InputIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={InputSrc} />
    <InputExamples />
  </div>
);

export default InputIndex;
