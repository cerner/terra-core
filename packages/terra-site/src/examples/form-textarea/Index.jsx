/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-textarea/docs/README.md';
import { version } from 'terra-form-textarea/package.json';

import TextareaExamples from './TextareaExamples';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextareaSrc from '!raw-loader!terra-form-textarea/src/Textarea';

// Example Files

const FormTextareaExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextareaSrc} />
    <TextareaExamples />
  </div>
);

export default FormTextareaExamples;
