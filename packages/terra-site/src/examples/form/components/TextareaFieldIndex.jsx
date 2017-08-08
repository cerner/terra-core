import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/TextareaField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextareaFieldSrc from '!raw-loader!terra-form/src/TextareaField';

// Example Files
import TextareaFieldExamples from '../examples/TextareaField';

const TextareaFieldIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextareaFieldSrc} />
    <TextareaFieldExamples />
  </div>
);

export default TextareaFieldIndex;
