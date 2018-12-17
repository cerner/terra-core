import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from '../../../AbstractModal';
import './AbstractModalTestStyles.module.scss';

class AbstractModalCloseFallbackFocusFunction extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.focusTrapRef = React.createRef();
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
          ariaLabel="Modal disable close on outside click"
          isOpen={this.state.isOpen}
          closeOnOutsideClick
          onRequestClose={this.handleCloseModal}
          fallbackFocus={() => (this.focusTrapRef.current)}
        >
          Fallback Focus Modal
          <p id="focus-element" ref={this.focusTrapRef} tabIndex="-1">Fallback Element</p>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalCloseFallbackFocusFunction;
