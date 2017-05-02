import React from 'react';
import Modal from '../../../lib/Modal';

class ModalEventHooks extends React.Component {
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
    this.handleBeforeClose = this.handleBeforeClose.bind(this);
  }


  /* eslint-disable */
  handleOnOpen(node) {
    const onOpenElement = document.getElementById('onOpen');
    onOpenElement.innerHTML = 'onOpen: Called';
  }

  handleOnClose() {
    const onOpenElement = document.getElementById('onClose');
    onOpenElement.innerHTML = 'onClose: Called';
  }

  handleOnUpdate() {
    const onOpenElement = document.getElementById('onUpdate');
    onOpenElement.innerHTML = 'onUpdate: Called';
  }

  handleBeforeClose(node, callback) {
    const onOpenElement = document.getElementById('beforeClose');
    onOpenElement.innerHTML = 'beforeClose: Called';
    callback();
  }
  /* eslint-enable */

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
        <div id="onOpen">onOpen: Not Called</div>
        <div id="onUpdate">onUpdate: Not Called</div>
        <div id="onClose">onClose: Not Called</div>
        <div id="beforeClose">beforeClose: Not Called</div>
      </div>
    );
  }
}

export default ModalEventHooks;
