import React from 'react';
import Modal from '../../../lib/Modal';

class ModalIsOpen extends React.Component {
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
      <div id="modal">
        <Modal
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>Terra Modal</h1>
            <h2>Subtitle</h2>
            <hr />
            <p>The Terra Modal is appended to the document body.</p>
            <p>{'Modal is assigned a role of \'document\' for accessibility.'}</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button className="button-open-modal" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalIsOpen;
