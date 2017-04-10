import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();
  }

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
    const openButton = <button>Open Modal</button>;
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        closeOnEsc
        closeOnOutsideClick
        openByClickOn={openButton}
        onClose={this.onClose}
        onOpen={this.onOpen}
        onUpdate={this.onUpdate}
      >
        <div>
          <h1>Terra Modal</h1>
          <h2>Subtitle</h2>
          <hr/>
          <p>The Terra Modal is appended to the document body.</p>
          <p>Modal is assigned a role of 'dialog' for accessibility.</p>
        </div>
      </Modal>
      </div>
    );
  }
}


export default ModalDefault;

