/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-field/docs/README.md';
import { version } from 'terra-form-field/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FormFieldSrc from '!raw-loader!terra-form-field/src/FormField';

// Example Files

const FormFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FormFieldSrc} />
  </div>
);

export default FormFieldExamples;
