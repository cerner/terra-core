import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal/docs/README.md';
import { version } from 'terra-modal/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!terra-modal/src/Modal';

// Example Files
import ModalIsOpen from './ModalIsOpen';
import ModalOpenByClickOn from './ModalOpenByClickOn';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="isOpen">isOpen</h2>
    <ModalIsOpen />
    <h2 id="openByClickOn">openByClickOn</h2>
    <ModalOpenByClickOn />
  </div>
);

export default ModalExamples;
