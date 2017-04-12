import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  render() {
    const openButton = <button>Open Modal</button>;
    return (
      <div>
        <Modal
          ariaLabel="Terra Modal"
          openByClickOn={openButton}
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
      </div>
    );
  }
}


export default ModalDefault;

