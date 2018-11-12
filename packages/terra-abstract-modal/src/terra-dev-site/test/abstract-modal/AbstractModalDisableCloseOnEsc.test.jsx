import React from 'react';
import AbstractModal from '../../../AbstractModal';
import './AbstractModalTestStyles.module.scss';

class ModalDisableCloseOnEsc extends React.Component {
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
        <AbstractModal
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnEsc={false}
          classNameModal="test-background-class"
        >
          <div>
            <h1>Terra Modal</h1>
            <h2>Subtitle</h2>
            <hr />
            <p>The Terra Modal is appended to the document body.</p>
            <p>{'Modal is assigned a role of \'document\' for accessibility.'}</p>
            <button id="focus-button" type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" className="button-open-modal" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalDisableCloseOnEsc;
