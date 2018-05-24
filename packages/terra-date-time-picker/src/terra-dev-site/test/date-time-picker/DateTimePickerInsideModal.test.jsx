import React from 'react';
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager';
import ModalContainer from '../../common/DateTimePickerModalContainer';

const ModalManagerDemo = () => (
  <Base locale={'en-US'}>
    <ModalManager>
      <ModalContainer />
    </ModalManager>
  </Base>
);

export default ModalManagerDemo;
