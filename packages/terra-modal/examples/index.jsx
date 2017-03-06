/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ModalSrc from '!raw-loader!../src/Modal.jsx';
// Example Files
import ModalSize from './ModalSize';

const ModalExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ModalSrc} />
    <h2 id="modal-size">Modal Size</h2>
    <ModalSize />
    <br />
  </div>
);

export default ModalExamples;
