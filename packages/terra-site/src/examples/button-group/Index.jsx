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
import ButtonGroupVariant from './ButtonGroupVariant';
import ButtonGroupSize from './ButtonGroupSize';
import ButtonGroupCompact from './ButtonGroupCompact';
import ButtonGroupSelectable from './ButtonGroupSelectable';
import ButtonGroupWithIcons from './ButtonGroupWithIcons';

const ButtonGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Button Group</h2>
    <PropsTable id="props" src={ButtonGroupSrc} />
    <h2>Button Group Button</h2>
    <PropsTable id="button-props" src={ButtonGroupButtonSrc} />
    <h2>Variants</h2>
    <ButtonGroupVariant />
    <br />
    <h2>Sizes</h2>
    <ButtonGroupSize />
    <br />
    <h2>Compact</h2>
    <ButtonGroupCompact />
    <br />
    <h2>Icons</h2>
    <ButtonGroupWithIcons />
    <br />
    <h2>Selectable</h2>
    <ButtonGroupSelectable />
  </div>
);

export default ButtonGroupExamples;
