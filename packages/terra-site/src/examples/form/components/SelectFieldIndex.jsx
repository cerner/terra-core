import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/SelectField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SelectFieldSrc from '!raw-loader!terra-form/src/SelectField';

// Example Files
import SelectFieldExamples from '../examples/SelectField';

const SelectFieldIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SelectFieldSrc} />
    <SelectFieldExamples />
  </div>
);

export default SelectFieldIndex;
