import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal/docs/README.md';
import { version } from 'terra-modal/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!terra-modal/src/Modal';

// Example Files
import ModalIsOpened from './ModalIsOpened';
import ModalCloseOnOutsideClick from './ModalCloseOnOutsideClick';
import ModalIsFullscreen from './ModalIsFullscreen';
import ModalWithDialog from './ModalWithDialog';
import DefaultWithDialog from './DefaultWithDialog';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={ModalSrc} />
    <h2 id="isOpened">Default Modal</h2>
    <ModalIsOpened />
    <br />
    <h2 id="defaultWithDialog">Default Modal w/ Dialog</h2>
    <DefaultWithDialog />
    <h2 id="closeOnOutsideClick">Disable closing the modal when clicking on the overlay</h2>
    <ModalCloseOnOutsideClick />
    <br />
    <h2 id="isFullscreen">Fullscreen Modal</h2>
    <ModalIsFullscreen />
    <br />
    <h2 id="fullWithDialog">Fullscreen Modal w/ Dialog</h2>
    <ModalWithDialog />
  </div>
);

export default ModalExamples;
