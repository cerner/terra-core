/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-checkbox/docs/README.md';
import { version } from 'terra-form-checkbox/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CheckboxSrc from '!raw-loader!terra-form-checkbox/src/Checkbox';

// Example Files
import DefaultCheckbox from './DefaultCheckboxExample';
import DisabledCheckbox from './DisabledCheckboxExample';
import LongTextCheckbox from './LongTextCheckboxExample';
import MultipleCheckboxes from './MultipleCheckboxesExample';

const CheckboxExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CheckboxSrc} />
    <h2 id="default">Default Checkbox</h2>
    <DefaultCheckbox />
    <br /> <br />
    <h2 id="disabled">Disabled Checkbox</h2>
    <DisabledCheckbox />
    <br /> <br />
    <h2 id="longtext">Long Text Checkbox</h2>
    <LongTextCheckbox />
    <br /> <br />
    <h2 id="multiple">Multiple Checkboxes - first defaults to checked</h2>
    <MultipleCheckboxes />
  </div>
);

export default CheckboxExamples;
