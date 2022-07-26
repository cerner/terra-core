import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import DialogModal from 'terra-dialog-modal';
import Card from 'terra-card';

class DefaultDialogModal extends React.Component {
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
    const text = ['Current Allergies: Cats, Dogs, Dust, Moulds'];
    return (
      <Card>
        <div>
          <Card.Body>
            <h3>Allergies</h3>
            <p>Current Patient names: Alex, Stokes, Joe root</p>
            <DialogModal
              ariaLabel="Dialog Modal"
              isOpen={this.state.isOpen}
              onRequestClose={this.handleCloseModal}
              header={<ActionHeader text="Allergies" level={2} onBack={this.handleCloseModal} onClose={this.handleCloseModal} />}
            >
              <p>{text}</p>
            </DialogModal>
            <Button id="trigger-dialog-modal" text="Show Allergies" onClick={this.handleOpenModal} />
          </Card.Body>
        </div>
      </Card>
    );
  }
}

export default DefaultDialogModal;
