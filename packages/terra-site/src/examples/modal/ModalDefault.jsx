import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';


class ModalDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  getApplicationNode() {
    return document.getElementById('app');
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleModal()}>Toggle modal</button>
        <Modal
          getApplicationNode={this.getApplicationNode}
          isOpen={this.state.isModalOpen}
          ariaLabel={'aria-label is required'}
          onRequestClose={this.closeModal}
        >
          <button onClick={() => this.toggleModal()}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalDefault;
