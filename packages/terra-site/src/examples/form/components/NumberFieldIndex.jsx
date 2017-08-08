import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/NumberField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NumberFieldSrc from '!raw-loader!terra-form/src/NumberField';

// Example Files
import NumberFieldExamples from '../examples/NumberField';

const NumberFieldIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={NumberFieldSrc} />
    <NumberFieldExamples />
  </div>
);

export default NumberFieldIndex;
