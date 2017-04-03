import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal/docs/README.md';
import { version } from 'terra-modal/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!terra-modal/src/Modal';

// Example Files
import ModalDefault from './ModalDefault';
import ModalFullscreen from './ModalFullscreen';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ModalSrc} />
    <h2 id="default">Default</h2>
    <ModalDefault />
    <h2 id="fullscreen">Fullscreen</h2>
    <ModalFullscreen />
  </div>
);

export default ModalExamples;
