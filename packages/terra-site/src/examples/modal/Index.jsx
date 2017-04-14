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
import ModalOpenByClickOn from './ModalOpenByClickOn';
import ModalDisableCloseOnEscCloseOnOutsideClick from './ModalDisableCloseOnEscCloseOnOutsideClick';
import ModalIsFullscreen from './ModalIsFullscreen';
import ModalAppendClassName from './ModalAppendClassName';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={ModalSrc} />
    <h2 id="isOpened">Using isOpened prop</h2>
    <ModalIsOpened />
    <h2 id="openByClickOn">Using openByClickOn prop</h2>
    <ModalOpenByClickOn />
    <hr />
    <h2 id="closeOnEsc-closeOnOutsideClick">Disable Close on esc and close on outside click</h2>
    <ModalDisableCloseOnEscCloseOnOutsideClick />
    <h2 id="isFullscreen">Enable isFullscreen</h2>
    <ModalIsFullscreen />
    <h2 id="append-class">Append ClassName</h2>
    <ModalAppendClassName />
  </div>
);

export default ModalExamples;
