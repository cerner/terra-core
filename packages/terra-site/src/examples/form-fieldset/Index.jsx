import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-fieldset/docs/README.md';
import { version } from 'terra-form-fieldset/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FieldsetSrc from '!raw-loader!terra-form/src/Fieldset';

// Example Files
import FieldsetExamples from './FieldsetExamples';

const FieldsetIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FieldsetSrc} />
    <FieldsetExamples />
  </div>
);

export default FieldsetIndex;
