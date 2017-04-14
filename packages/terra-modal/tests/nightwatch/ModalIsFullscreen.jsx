import React from 'react';
import Modal from '../../lib/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
       isOpened: true,
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
          ariaLabel="Terra Modal"
          isOpened={this.state.isOpened}
          isFullscreen
        >
          <div>
            <h1>Terra Modal</h1>
            <button onClick={this.handleCloseModal}>Close isOpen modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open isOpen modal</button>
      </div>
    );
  }
}


export default ModalDefault;

