import React from 'react';
import Button from 'terra-button';
import Heading from 'terra-heading';
import Modal from 'terra-modal';
import Dialog from 'terra-dialog';
import Spacer from 'terra-spacer';
import '../../site.scss';

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
          classNameModal="demo-modal-dialog"
        >
          <Dialog
            header={<Heading level={1} size="small" weight={400}>Default Modal with Dialog</Heading>}
            footer={<div style={{ textAlign: 'right' }}><Button variant={Button.Opts.Variants.EMPHASIS} onClick={this.handleCloseModal} text="Action" /><Spacer isInlineBlock marginLeft="small"><Button variant={Button.Opts.Variants.NEUTRAL} onClick={this.handleCloseModal} text="Cancel" /></Spacer></div>}
            onClose={this.handleCloseModal}
          >
            <p>The terra-dialog component can be nested inside the terra-modal component to provide a more structured modal component.</p>
            <p>You can close the modal by:</p>
            <ul>
              <li>- Pressing the ESC key</li>
              <li>- Clicking on the overlay</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <p>On smaller screens, the modal will take up the full screen.</p>
          </Dialog>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalIsOpen;
