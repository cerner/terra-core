import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/TextField.md';
import { version } from 'terra-form/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextFieldSrc from '!raw-loader!terra-form/src/TextField';

// Example Files
import TextFieldExamples from '../examples/TextField';

const TextFieldIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextFieldSrc} />
    <TextFieldExamples />
  </div>
);

export default TextFieldIndex;
