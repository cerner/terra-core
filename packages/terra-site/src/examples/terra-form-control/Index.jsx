/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-terra-form-control/docs/README.md';
import { version } from 'terra-terra-form-control/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TerraFormControlSrc from '!raw-loader!terra-terra-form-control/src/TerraFormControl';

// Example Files

const TerraFormControlExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TerraFormControlSrc} />
  </div>
);

export default TerraFormControlExamples;
