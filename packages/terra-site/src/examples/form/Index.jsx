/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import FieldDocs from 'terra-form/docs/components/Field.md';
import FieldsetDocs from 'terra-form/docs/components/Fieldset.md';
import InputDocs from 'terra-form/docs/components/Input.md';

import { version } from 'terra-form/package.json';

// Component Source
import FieldSrc from '!raw-loader!terra-form/src/components/Field';
import FieldsetSrc from '!raw-loader!terra-form/src/components/Fieldset';
import InputSrc from '!raw-loader!terra-form/src/components/Input';

// Example Files
import FieldExamples from './examples/Field';
import FieldsetExamples from './examples/Fieldset';
import InputExamples from './examples/Input';

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Components</h1>
    <hr />
    <div>
      <Button text="Field" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Fieldset" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Input" variant="link" onClick={() => { scrollToComponent('#input'); }} />
    </div>
    <Markdown id="field-docs" src={FieldDocs} />
    <PropsTable id="field-props" src={FieldSrc} />
    <FieldExamples />
    <Markdown id="fieldset-docs" src={FieldsetDocs} />
    <PropsTable id="fieldset-props" src={FieldsetSrc} />
    <FieldsetExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <PropsTable id="input-props" src={InputSrc} />
    <InputExamples />
  </div>
);

export default FormsExamples;
