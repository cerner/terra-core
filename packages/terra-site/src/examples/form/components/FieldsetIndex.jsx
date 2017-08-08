import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/Fieldset.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FieldsetSrc from '!raw-loader!terra-form/src/Fieldset';

// Example Files
import FieldsetExamples from '../examples/Fieldset';

const FieldsetIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FieldsetSrc} />
    <FieldsetExamples />
  </div>
);

export default FieldsetIndex;
