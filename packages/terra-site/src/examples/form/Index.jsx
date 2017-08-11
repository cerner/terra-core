/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import { version } from 'terra-form/package.json';
import ToggleButton from 'terra-toggle-button';

// Example Files
import ControlledInput from './examples/ControlledInput';
import ControlSrc from '!raw-loader!./examples/ControlledInput';

const codeIndicator = '```';

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Controlled Form Example</h2>
    <br />
    <ControlledInput />
    <br />
    <ToggleButton closedButtonText="Show Example Code" openedButtonText="Hide Example Code" isAnimated buttonAttrs={{ variant: 'link' }}>
      <Markdown id="controlled-input-example" src={`${codeIndicator}jsx\n${ControlSrc}${codeIndicator}`} componentName="ControlledInput" />
    </ToggleButton>
  </div>
);

export default FormsExamples;
