import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-abstract-modal/docs/README.md';
import { version } from 'terra-abstract-modal/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!terra-abstract-modal/src/AbstractModal';

// Example Files
import AbstractModalIsOpened from './AbstractModalIsOpened';
import AbstractModalCloseOnOutsideClick from './AbstractModalCloseOnOutsideClick';
import AbstractModalIsFullscreen from './AbstractModalIsFullscreen';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={ModalSrc} />
    <h2 id="isOpened">Default Modal</h2>
    <AbstractModalIsOpened />
    <br />
    <h2 id="closeOnOutsideClick">Disable closing the modal when clicking on the overlay</h2>
    <AbstractModalCloseOnOutsideClick />
    <br />
    <h2 id="isFullscreen">Fullscreen Modal</h2>
    <AbstractModalIsFullscreen />
  </div>
);

export default ModalExamples;
