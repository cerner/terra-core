import React from 'react';
import Modal from '../../../lib/Modal';
import './ModalAppendClass.scss';

class ModalAppendClass extends React.Component {
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
          classNameOverlay="overlay-custom-class"
          classNameModal="modal-custom-class"
          ariaLabel="Terra Modal"
          isOpened={this.state.isOpened}
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

export default ModalAppendClass;
