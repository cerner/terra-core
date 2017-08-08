import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/Textarea.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextareaSrc from '!raw-loader!terra-form/src/Textarea';

// Example Files
import TextareaExamples from '../examples/Textarea';

const TextareaIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextareaSrc} />
    <TextareaExamples />
  </div>
);

export default TextareaIndex;
