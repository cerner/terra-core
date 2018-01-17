/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-button-group/docs/README.md';
import { version } from 'terra-button-group/package.json';
// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ButtonGroupSrc from '!raw-loader!terra-button-group/src/ButtonGroup.jsx';
import ButtonGroupButtonSrc from '!raw-loader!terra-button-group/src/ButtonGroupButton.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
// Examples
import ButtonGroupWithIcons from './ButtonGroupWithIcons';
import ButtonGroupDisabledButtons from './ButtonGroupDisabledButtons';
import ButtonGroupSingleSelect from './ButtonGroupSingleSelect';
import ButtonGroupMultiSelect from './ButtonGroupMultiSelect';


const ButtonGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ButtonGroupSrc} componentName="Button Group" />
    <PropsTable id="button-props" src={ButtonGroupButtonSrc} componentName="Button Group Button" />
    <h2>Text and Icon</h2>
    <ButtonGroupWithIcons />
    <h2>Single Select</h2>
    <ButtonGroupSingleSelect />
    <h2>Multi Select</h2>
    <ButtonGroupMultiSelect />
    <h2>Disabled Buttons</h2>
    <ButtonGroupDisabledButtons />
  </div>
);

export default ButtonGroupExamples;
