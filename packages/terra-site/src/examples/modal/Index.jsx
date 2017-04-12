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
import ModalCloseOnEsc from './ModalCloseOnEsc';
import ModalIsFullscreen from './ModalIsFullscreen';
import ModalCloseOnOutsideClick from './ModalCloseOnOutsideClick';
import ModalAppendClassName from './ModalAppendClassName';
import ModalStyled from './ModalStyled';
import ModalLargeContent from './ModalLargeContent';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="isOpen">isOpen</h2>
    <ModalIsOpen />
    <h2 id="openByClickOn">openByClickOn</h2>
    <ModalOpenByClickOn />
    <hr/>
    <h2 id="closeOnEsc">Disable closeOnEsc</h2>
    <ModalCloseOnEsc />
    <h2 id="closeOnOutsideClick">Disable closeOnOutsideClick</h2>
    <ModalCloseOnOutsideClick />
    <h2 id="isFullscreen">Enable isFullscreen</h2>
    <ModalIsFullscreen />
    <h2 id="append-class">Append ClassName</h2>
    <ModalAppendClassName />
    <h2 id="styled-modal">Styled Modal</h2>
    <ModalStyled />
    <h2 id="appendClass">Large Content</h2>
    <ModalLargeContent />
  </div>
);

export default ModalExamples;
