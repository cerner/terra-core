import React from 'react';
import AbstractModal from 'terra-abstract-modal';
import styles from './ExampleAbstractSize.scss';

class AbstractModalCloseOnOutsideClick extends React.Component {
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
          ariaLabel="Modal disable close on outside click"
          isOpen={this.state.isOpen}
          closeOnOutsideClick={false}
          onRequestClose={this.handleCloseModal}
          classNameModal={styles['fixed-size']}
        >
          <div style={{ height: '100%', width: '100%', overflow: 'hidden', backgroundColor: 'lightgreen' }}>
            <h1>Modal disable close on outside click</h1>
            <br />
            <p>You can close the modal by:</p>
            <ul>
              <li>- Pressing the ESC key</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalCloseOnOutsideClick;
