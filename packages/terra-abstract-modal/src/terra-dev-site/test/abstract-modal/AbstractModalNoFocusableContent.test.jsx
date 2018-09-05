import React from 'react';
import AbstractModal from '../../../AbstractModal';
import './AbstractModalTestStyles.module.scss';

class ModalNoFocusableContent extends React.Component {
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
          classNameModal="test-background-class"
        >
          <div>No focusable content inside the modal.</div>
        </AbstractModal>
        <button type="button" className="button-open-modal" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalNoFocusableContent;
