import React from 'react';
import Modal from '../../../lib/Modal';

class ModalOverrideRole extends React.Component {
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
    const newRole = 'button';
    return (
      <div>
        <Modal
          ariaLabel="Terra Modal"
          isOpened={this.state.isOpened}
          onRequestClose={this.handleCloseModal}
          role={newRole}
        >
          <div>
            <p>The role is overriden to <b>{newRole}</b></p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button className="button-open-modal" onClick={this.handleOpenModal}>Open isOpen modal</button>
      </div>
    );
  }
}


export default ModalOverrideRole;

