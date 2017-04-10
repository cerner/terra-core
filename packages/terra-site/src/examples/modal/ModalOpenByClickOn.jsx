import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    };

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
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        isOpened={this.state.isOpened}
        closeOnEsc
        closeOnOutsideClick
        openByClickOn={<button>Open openByClickOn modal</button>}
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

