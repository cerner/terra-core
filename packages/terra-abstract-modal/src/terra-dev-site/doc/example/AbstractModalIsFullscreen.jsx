import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';

class AbstractModalIsFullscreen extends React.Component {
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
        <AbstractModal
          ariaLabel="Fullscreen Modal"
          isOpen={this.state.isOpen}
          isFullscreen
          onRequestClose={this.handleCloseModal}
        >
          <div style={{
            height: '100%', width: '100%', overflow: 'hidden', backgroundColor: 'aquamarine',
          }}
          >
            <h1>Fullscreen Modal</h1>
            <br />
            <p>This modal will always take up the full screen.</p>
            <p />
            <br />
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalIsFullscreen;
