import React from 'react';
import AbstractModal from '../../../lib/AbstractModal';
import './AbstractModalTestStyles.scss';

class ModalOverrideRole extends React.Component {
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
    const newRole = 'button';
    return (
      <div>
        <AbstractModal
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          role={newRole}
          classNameModal="test-background-class"
        >
          <div>
            <p>The role is overriden to <b>{newRole}</b></p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button className="button-open-modal" onClick={this.handleOpenModal}>Open isOpen modal</button>
      </div>
    );
  }
}


export default ModalOverrideRole;

