/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import ControlDocs from 'terra-form/docs/Control.md';
import FieldDocs from 'terra-form/docs/Field.md';
import FieldsetDocs from 'terra-form/docs/Fieldset.md';
import InputDocs from 'terra-form/docs/Input.md';
import NumberFieldDocs from 'terra-form/docs/NumberField.md';
import TextareaDocs from 'terra-form/docs/Textarea.md';
import TextareaFieldDocs from 'terra-form/docs/TextareaField.md';
import TextFieldDocs from 'terra-form/docs/TextField.md';
import SelectDocs from 'terra-form/docs/Select.md';
import SelectFieldDocs from 'terra-form/docs/SelectField.md';

import { version } from 'terra-form/package.json';

// Component Source
import ControlSrc from '!raw-loader!terra-form/src/Control';
import FieldSrc from '!raw-loader!terra-form/src/Field';
import FieldsetSrc from '!raw-loader!terra-form/src/Fieldset';
import InputSrc from '!raw-loader!terra-form/src/Input';
import NumberFieldSrc from '!raw-loader!terra-form/src/NumberField';
import TextareaSrc from '!raw-loader!terra-form/src/Textarea';
import TextareaFieldSrc from '!raw-loader!terra-form/src/TextareaField';
import TextFieldSrc from '!raw-loader!terra-form/src/TextField';
import SelectSrc from '!raw-loader!terra-form/src/Select';
import SelectFieldSrc from '!raw-loader!terra-form/src/SelectField';

// Example Files
import ControlledInputDocs from './docs/ControlledInput.md';
import ControlledInput from './examples/ControlledInput';
import ControlExamples from './examples/Control';
import FieldExamples from './examples/Field';
import FieldsetExamples from './examples/Fieldset';
import InputExamples from './examples/Input';
import NumberFieldExamples from './examples/NumberField';
import TextareaExamples from './examples/Textarea';
import TextareaFieldExamples from './examples/TextareaField';
import TextFieldExamples from './examples/TextField';
import SelectExamples from './examples/Select';
import SelectFieldExamples from './examples/SelectField';

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
      <Button text="Fieldset" variant="link" onClick={() => { scrollToComponent('#fieldset'); }} />
    </div>
    <div>
      <Button text="Input" variant="link" onClick={() => { scrollToComponent('#input'); }} />
    </div>
    <div>
      <Button text="Control" variant="link" onClick={() => { scrollToComponent('#control'); }} />
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
      <Button text="Text Field" variant="link" onClick={() => { scrollToComponent('#text-field'); }} />
    </div>
    <div>
      <Button text="Select" variant="link" onClick={() => { scrollToComponent('#select'); }} />
    </div>
    <div>
      <Button text="Select Field" variant="link" onClick={() => { scrollToComponent('#select-field'); }} />
    </div>
    <div>
      <Button text="Controlled Input Example" variant="link" onClick={() => { scrollToComponent('#controlled-input-example'); }} />
    </div>
    <Markdown id="field-docs" src={FieldDocs} />
    <PropsTable id="field-props" src={FieldSrc} componentName="Field" />
    <FieldExamples />
    <Markdown id="fieldset-docs" src={FieldsetDocs} />
    <PropsTable id="fieldset-props" src={FieldsetSrc} componentName="FieldSet" />
    <FieldsetExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <PropsTable id="input-props" src={InputSrc} componentName="Input" />
    <InputExamples />
    <Markdown id="control-docs" src={ControlDocs} />
    <PropsTable id="control-props" src={ControlSrc} componentName="Control" />
    <ControlExamples />
    <Markdown id="number-field-docs" src={NumberFieldDocs} />
    <PropsTable id="number-field-props" src={NumberFieldSrc} componentName="Number Field" />
    <NumberFieldExamples />
    <Markdown id="text-area-docs" src={TextareaDocs} />
    <PropsTable id="text-area-props" src={TextareaSrc} componentName="Textarea" />
    <TextareaExamples />
    <Markdown id="text-area-field-docs" src={TextareaFieldDocs} />
    <PropsTable id="text-area-field-props" src={TextareaFieldSrc} componentName="Textarea Field" />
    <TextareaFieldExamples />
    <Markdown id="text-field-docs" src={TextFieldDocs} />
    <PropsTable id="text-field-props" src={TextFieldSrc} componentName="Text Field" />
    <TextFieldExamples />
    <Markdown id="select-docs" src={SelectDocs} />
    <PropsTable id="select-props" src={SelectSrc} componentName="Select" />
    <SelectExamples />
    <Markdown id="select-field-docs" src={SelectFieldDocs} />
    <PropsTable id="select-field-props" src={SelectFieldSrc} componentName="Select Field" />
    <SelectFieldExamples />
    <Markdown id="controlled-input-example" src={ControlledInputDocs} componentName="ControlledInput" />
    <ControlledInput />
  </div>
);

export default FormsExamples;
