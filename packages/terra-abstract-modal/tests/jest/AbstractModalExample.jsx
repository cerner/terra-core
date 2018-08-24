import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from '../../src/AbstractModal';

const propTypes = {
  zIndex: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

class ModalExample extends React.Component {
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
          zIndex={this.props.zIndex}
          isFullscreen={this.props.isFullscreen}
        >
          <div>
            <h1>Terra Modal</h1>
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

ModalExample.propTypes = propTypes;

export default ModalExample;
