/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-signature/docs/README.md';
import { version } from 'terra-signature/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SignatureSrc from '!raw-loader!terra-signature/src/Signature';

// Example Files
import SignatureExample from './SignatureExample';

const SignatureExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-signature" src={SignatureSrc} componentName="Signature" />
    <SignatureExample />
  </div>
);

export default SignatureExamples;
