/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-input/docs/README.md';
import { version } from 'terra-form-input/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FormInputSrc from '!raw-loader!terra-form-input/src/Input';

// Example Files
import ControlledDefaultExample from './controlled_examples/DefaultExample';
import ControlledDisabledExample from './controlled_examples/DisabledExample';
import ControlledDefaultErrorExample from './controlled_examples/DefaultErrorExample';
import ControlledDisabledErrorExample from './controlled_examples/DisabledErrorExample';
import UncontrolledDefaultExample from './uncontrolled_examples/DefaultExample';
import UncontrolledDisabledExample from './uncontrolled_examples/DisabledExample';
import UncontrolledDefaultErrorExample from './uncontrolled_examples/DefaultErrorExample';
import UncontrolledDisabledErrorExample from './uncontrolled_examples/DisabledErrorExample';

const Examples = () => (
  <div>
    <h2>Examples – Controlled</h2>
    <h3>Valid</h3>
    <ControlledDefaultExample />
    <ControlledDisabledExample />
    <br />
    <h3>Invalid</h3>
    <ControlledDefaultErrorExample />
    <ControlledDisabledErrorExample />
    <br />
    <br />
    <h2>Examples – Uncontrolled</h2>
    <h3>Valid</h3>
    <UncontrolledDefaultExample />
    <UncontrolledDisabledExample />
    <br />
    <h3>Invalid</h3>
    <UncontrolledDefaultErrorExample />
    <UncontrolledDisabledErrorExample />
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
