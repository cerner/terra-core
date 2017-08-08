import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/Input.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import InputSrc from '!raw-loader!terra-form/src/Input';

// Example Files
import InputExamples from '../examples/Input';

const InputIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={InputSrc} />
    <InputExamples />
  </div>
);

export default InputIndex;
