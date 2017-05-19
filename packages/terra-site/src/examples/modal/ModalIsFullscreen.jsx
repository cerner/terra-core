import React from 'react';
import Modal from 'terra-modal';

class ModalIsFullscreen extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpened: true });
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="Fullscreen Modal"
          isOpened={this.state.isOpened}
          isFullscreen
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>Fullscreen Modal</h1>
            <br />
            <p>This modal will always take up the full screen.</p>
            <p />
            <br />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalIsFullscreen;
