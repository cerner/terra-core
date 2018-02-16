import React from 'react';
import Modal from 'terra-modal';
import Dialog from 'terra-dialog';
import styles from '../../site.scss';

class ModalWithDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="Fullscreen Modal"
          isOpen={this.state.isOpen}
          isFullscreen
          onRequestClose={this.handleCloseModal}
        >
          <Dialog header={<h1>Fullscreen Modal</h1>} footer={<button onClick={this.handleCloseModal}>Close Modal</button>}>
            <p>This modal will always take up the full screen.</p>
          </Dialog>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalWithDialog;
