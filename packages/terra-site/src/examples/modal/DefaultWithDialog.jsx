import React from 'react';
import Modal from 'terra-modal';
import Dialog from 'terra-dialog';

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
      <div>
        <Modal
          ariaLabel="Default Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <div style={{ height: '450px', width: '450px' }}>
            <Dialog header={<h1>Default Modal</h1>} footer={<button onClick={this.handleCloseModal}>Close Modal</button>}>
              <p>You can close the modal by:</p>
              <ul>
                <li>- Pressing the ESC key</li>
                <li>- Clicking on the overlay</li>
                <li>- Clicking on the close button</li>
              </ul>
              <br />
              <p>On smaller screens, the modal will take up the full screen.</p>
            </Dialog>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalIsOpen;
