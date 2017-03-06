import React from 'react';
import { ModalWrapper, Text } from './ModalWrapper';

const ModalSize = () => (
  <div>
    <div style={{ display: 'flex' }}>
      <ModalWrapper size="tiny" header={<Text text="Tiny Modal" />} buttonName="Tiny Modal" />
      <ModalWrapper size="small" header={<Text text="Small Modal" />} buttonName="Small Modal" />
      <ModalWrapper size="medium" header={<Text text="Medium Modal" />} buttonName="Medium Modal" />
      <ModalWrapper size="large" header={<Text text="Large Modal" />} buttonName="Large Modal" />
      <ModalWrapper size="huge" header={<Text text="Huge Modal" />} buttonName="Huge Modal" />
    </div>
    <div>
      <ModalWrapper isFullScreen header={<Text text="Full Screen Modal" />} buttonName="Full Screen Modal" />
    </div>
  </div>
);

export default ModalSize;
