/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import { version } from 'terra-form/package.json';
import ToggleButton from 'terra-toggle-button';

// Example Files
import ControlledInputDocs from './docs/ControlledInput.md';
import ControlledInput from './examples/ControlledInput';

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <ControlledInput />
    <br />
    <ToggleButton closedButtonText="Show Example Code" openedButtonText="Hide Example Code" isAnimated buttonAttrs={{ variant: 'link' }}>
      <Markdown id="controlled-input-example" src={ControlledInputDocs} componentName="ControlledInput" />
    </ToggleButton>
  </div>
);

export default FormsExamples;
