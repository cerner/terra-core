/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import ChoiceFieldDocs from 'terra-form/docs/components/ChoiceField.md';
import ControlDocs from 'terra-form/docs/components/Control.md';
import FieldDocs from 'terra-form/docs/components/Field.md';
import InputDocs from 'terra-form/docs/components/Input.md';
import MultiChoiceFieldDocs from 'terra-form/docs/components/MultiChoiceField.md';
import NumberFieldDocs from 'terra-form/docs/components/NumberField.md';
import TextareaDocs from 'terra-form/docs/components/Textarea.md';
import TextareaFieldDocs from 'terra-form/docs/components/TextareaField.md';
import TextFieldDocs from 'terra-form/docs/components/TextField.md';

import { version } from 'terra-form/package.json';

// Component Source
import ChoiceFieldSrc from '!raw-loader!terra-form/src/components/ChoiceField';
import ControlSrc from '!raw-loader!terra-form/src/components/Control';
import FieldSrc from '!raw-loader!terra-form/src/components/Field';
import InputSrc from '!raw-loader!terra-form/src/components/Input';
import MultiChoiceFieldSrc from '!raw-loader!terra-form/src/components/MultiChoiceField';
import NumberFieldSrc from '!raw-loader!terra-form/src/components/NumberField';
import TextareaSrc from '!raw-loader!terra-form/src/components/Textarea';
import TextareaFieldSrc from '!raw-loader!terra-form/src/components/TextareaField';
import TextFieldSrc from '!raw-loader!terra-form/src/components/TextField';

// Example Files
import ChoiceFieldExamples from './examples/ChoiceField';
import ControlExamples from './examples/Control';
import FieldExamples from './examples/Field';
import InputExamples from './examples/Input';
import FullForm from './examples/FullForm';
import MultiChoiceFieldExamples from './examples/MultiChoiceField';
import NumberFieldExamples from './examples/NumberField';
import TextareaExamples from './examples/Textarea';
import TextareaFieldExamples from './examples/TextareaField';
import TextFieldExamples from './examples/TextField';

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
      <Button text="Choice Field" variant="link" onClick={() => { scrollToComponent('#choice-field'); }} />
    </div>
    <div>
      <Button text="Control" variant="link" onClick={() => { scrollToComponent('#control'); }} />
    </div>
    <div>
      <Button text="Field" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Input" variant="link" onClick={() => { scrollToComponent('#input'); }} />
    </div>
    <div>
      <Button text="Multi-Choice Field" variant="link" onClick={() => { scrollToComponent('#multi-choice-field'); }} />
    </div>
    <div>
      <Button text="Number Field" variant="link" onClick={() => { scrollToComponent('#number-field'); }} />
    </div>
    <div>
      <Button text="Textarea" variant="link" onClick={() => { scrollToComponent('#textarea'); }} />
    </div>
    <div>
      <Button text="Textarea Field" variant="link" onClick={() => { scrollToComponent('#textarea-field'); }} />
    </div>
    <div>
      <Button text="Text field" variant="link" onClick={() => { scrollToComponent('#text-field'); }} />
    </div>
    <Markdown id="choice-field-docs" src={ChoiceFieldDocs} />
    <PropsTable id="choice-field-props" src={ChoiceFieldSrc} />
    <ChoiceFieldExamples />
    <Markdown id="control-docs" src={ControlDocs} />
    <PropsTable id="control-props" src={ControlSrc} />
    <ControlExamples />
    <Markdown id="field-docs" src={FieldDocs} />
    <PropsTable id="field-props" src={FieldSrc} />
    <FieldExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <PropsTable id="input-props" src={InputSrc} />
    <InputExamples />
    <Markdown id="multi-choice-field-docs" src={MultiChoiceFieldDocs} />
    <PropsTable id="multi-choice-field-props" src={MultiChoiceFieldSrc} />
    <MultiChoiceFieldExamples />
    <Markdown id="number-field-docs" src={NumberFieldDocs} />
    <PropsTable id="number-field-props" src={NumberFieldSrc} />
    <NumberFieldExamples />
    <Markdown id="text-area-docs" src={TextareaDocs} />
    <PropsTable id="text-area-props" src={TextareaSrc} />
    <TextareaExamples />
    <Markdown id="text-area-field-docs" src={TextareaFieldDocs} />
    <PropsTable id="text-area-field-props" src={TextareaFieldSrc} />
    <TextareaFieldExamples />
    <Markdown id="text-field-docs" src={TextFieldDocs} />
    <PropsTable id="text-field-props" src={TextFieldSrc} />
    <TextFieldExamples />
    <FullForm />
  </div>
);

export default FormsExamples;
