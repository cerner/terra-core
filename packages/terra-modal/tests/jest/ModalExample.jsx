import React from 'react';
import Modal from '../../src/Modal';

class ModalExample extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
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
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>Terra Modal</h1>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalExample;
