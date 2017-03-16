/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ButtonGroupSrc from '!raw-loader!../src/ButtonGroup.jsx';
import ButtonGroupButtonSrc from '!raw-loader!../src/ButtonGroupButton.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
// Examples
import ButtonGroupIntent from './ButtonGroupIntent';
import ButtonGroupSize from './ButtonGroupSize';
import ButtonGroupCompact from './ButtonGroupCompact';
import ButtonGroupSelectable from './ButtonGroupSelectable';

const ButtonGroupExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Button Group</h2>
    <PropsTable id="props" src={ButtonGroupSrc} />
    <h2>Button Group Button</h2>
    <PropsTable id="button-props" src={ButtonGroupButtonSrc} />
    <h2>Intent</h2>
    <ButtonGroupIntent />
    <h2>Size</h2>
    <ButtonGroupSize />
    <h2>Compact</h2>
    <ButtonGroupCompact />
    <h2>Selectable</h2>
    <ButtonGroupSelectable />
  </div>
);

export default ButtonGroupExamples;
