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
import ModalCloseOnEsc from './ModalDisableCloseOnEsc';
import ModalIsFullscreen from './ModalIsFullscreen';
import ModalCloseOnOutsideClick from './ModalDisableCloseOnOutsideClick';
import ModalAppendClassName from './ModalAppendClassName';
import ModalContainLargeContent from './ModalContainLargeContent';
import ModalDialog from './ModalDialog/ModalDialog';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={ModalSrc} />
    <h2 id="isOpened">ModalIsOpened</h2>
    <ModalIsOpened />
    <h2 id="openByClickOn">openByClickOn</h2>
    <ModalOpenByClickOn />
    <hr />
    <h2 id="closeOnEsc">Disable closeOnEsc</h2>
    <ModalCloseOnEsc />
    <h2 id="closeOnOutsideClick">Disable closeOnOutsideClick</h2>
    <ModalCloseOnOutsideClick />
    <h2 id="isFullscreen">Enable isFullscreen</h2>
    <ModalIsFullscreen />
    <h2 id="append-class">Append ClassName</h2>
    <ModalAppendClassName />
    <h2 id="containlargecontent">ModalContainLargeContent</h2>
    <ModalContainLargeContent />
    <h2 id="modal-dialog">Styled Modal Dialog</h2>
    <ModalDialog />
  </div>
);

export default ModalExamples;
