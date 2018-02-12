/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-input/docs/README.md';
import { version } from 'terra-form-input/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FormInputSrc from '!raw-loader!terra-form-input/src/FormInput';

// Example Files
import DefaultExample from './DefaultExample';
import DisabledExample from './DisabledExample';
import DefaultErrorExample from './DefaultErrorExample';
import DisabledErrorExample from './DisabledErrorExample';

// TODO ensure that mouse changes to a cursor when hovering over <FormInput /> in all browsers
const Examples = () => (
  <div>
    <h2>Examples</h2>
    <h3>Valid</h3>
    <DefaultExample />
    <DisabledExample />
    <br />
    <h3>Invalid</h3>
    <DefaultErrorExample />
    <DisabledErrorExample />
  </div>
);

const FormInputExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FormInputSrc} />
    <Examples />
  </div>
);

export default FormInputExamples;
