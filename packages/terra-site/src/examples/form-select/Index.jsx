/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-select/docs/README.md';
import { version } from 'terra-form-select/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import SelectSrc from '!raw-loader!terra-form-select/src/Select';
import SelectOptionSrc from '!raw-loader!terra-form-select/src/SelectOption';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import DefaultSelect from './DefaultSelect';
import InvalidSelect from './InvalidSelect';
import SelectWithoutDefault from './SelectWithoutDefault';
import DisabledSelect from './DisabledSelect';
import SelectInsideModal from './SelectInsideModal';
import BoundedSelect from './BoundedSelect';
import LongTextSelect from './LongTextSelect';

const SelectExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SelectSrc} componentName="Select" />
    <PropsTable id="option-props" src={SelectOptionSrc} componentName="Select.Option" />
    <h2>Select component with default initial value</h2>
    <DefaultSelect />
    <h2>Invalid select component</h2>
    <InvalidSelect />
    <h2>Select component with no initial value set</h2>
    <SelectWithoutDefault />
    <h2>Disabled select component</h2>
    <DisabledSelect />
    <h2>Bounded Select</h2>
    <BoundedSelect />
    <h2>Long Text Select</h2>
    <LongTextSelect />
    <h2>Select inside a modal</h2>
    <SelectInsideModal />
  </div>
);

export default SelectExamples;
