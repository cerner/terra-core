/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-modal-manager/docs/README.md';
import { version } from 'terra-clinical-modal-manager/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalManagerSrc from '!raw-loader!terra-clinical-modal-manager/src/ModalManager';

import ModalManagerDemo from './ModalManagerDemo';

// Example Files

const ModalManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ModalManagerSrc} />
    <br />
    <h2>Demo</h2>
    <div style={{ height: '300px' }}>
      <ModalManagerDemo />
    </div>
  </div>
);

export default ModalManagerExamples;
