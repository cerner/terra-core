import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { Link } from 'react-router';
import ReadMe from 'terra-form/docs/Control.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ControlSrc from '!raw-loader!terra-form/src/Control';

// Example Files
import ControlExamples from '../examples/Control';

const ControlIndex = () => (
  <div>
    <Link to="/site/form" style={{ textDecoration: 'none' }}>Back to Terra-Form</Link>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ControlSrc} />
    <ControlExamples />
  </div>
);

export default ControlIndex;
