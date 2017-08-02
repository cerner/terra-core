import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/Fieldset.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FieldsetSrc from '!raw-loader!terra-form/src/Fieldset';

// Example Files
import FieldsetExamples from '../examples/Fieldset';

const FieldsetIndex = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FieldsetSrc} />
    <FieldsetExamples />
  </div>
);

export default FieldsetIndex;
