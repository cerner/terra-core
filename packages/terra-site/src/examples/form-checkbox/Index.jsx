/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-checkbox/docs/README.md';
import { version } from 'terra-form-checkbox/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FormCheckboxSrc from '!raw-loader!terra-form-checkbox/src/FormCheckbox';

// Example Files

const FormCheckboxExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FormCheckboxSrc} />
  </div>
);

export default FormCheckboxExamples;
