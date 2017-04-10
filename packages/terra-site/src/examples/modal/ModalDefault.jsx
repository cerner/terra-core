import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';
import ModalContent from './ModalContent';

class ModalDefault extends React.Component {
  onClose() {
    console.log('onClose');
  }

  onOpen() {
    console.log('onOpen');
  }

  onUpdate() {
    console.log('onUpdate');
  }

  beforeClose() {
    console.log('beforeClose');
  }

 render() {
    const button1 = <button>Open terra modal</button>;

    return (
      <Modal
        closeOnEsc
        closeOnOutsideClick
        openByClickOn={button1}
        onClose={this.onClose}
        onOpen={this.onOpen}
        onUpdate={this.onUpdate}
      >
        <ModalContent />
      </Modal>
    );
  }
}


export default ModalDefault;

