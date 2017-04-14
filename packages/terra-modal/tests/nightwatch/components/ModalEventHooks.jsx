import React from 'react';
import Modal from '../../../lib/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnOpen(node) {
    console.log('onOpen'); // eslint-disable-line
  }

  handleOnClose() {
    console.log('onClose'); // eslint-disable-line
  }

  handleOnUpdate() {
    console.log('onUpdate'); // eslint-disable-line
  }

  handleBeforeClose(node, callback) {
    console.log('beforeClose'); // eslint-disable-line
    callback();
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
          onOpen={this.handleOnOpen}
          onClose={this.handleOnClose}
          onUpdate={this.handleOnUpdate}
          beforeClose={this.handleBeforeClose}
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

export default ModalDefault;
