import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

 handleOpenModal() {
  console.log('preOpenModal: ' + this.state.isOpened);
  this.setState({ isOpened: true });
  console.log('postOpenModal: ' + this.state.isOpened);
 }

 handleCloseModal() {
  console.log('preCloseModal: ' + this.state.isOpened);
  this.setState({ isOpened: false });
  console.log('postCloseModal: ' + this.state.isOpened);
 }

 render() {
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        isOpened={this.state.isOpened}
        closeOnEsc
        closeOnOutsideClick
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
          <button onClick={this.handleCloseModal}>Close isOpen modal</button>
        </div>
      </Modal>
      <button onClick={this.handleOpenModal}>Open isOpen modal</button>
      </div>
    );
  }
}


export default ModalDefault;

