import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import styles from './ExampleAbstractSize.module.scss';

class AbstractModalIsOpen extends React.Component {
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
          ariaLabel="Default Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          classNameModal={styles['fixed-size']}
        >
          <div style={{
            height: '100%', width: '100%', overflow: 'hidden', backgroundColor: 'antiquewhite',
          }}
          >
            <h1>Default Modal</h1>
            <br />
            <p>You can close the modal by:</p>
            <ul>
              <li>- Pressing the ESC key</li>
              <li>- Clicking on the overlay</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <p>On smaller screens, the modal will take up the full screen.</p>
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

export default AbstractModalIsOpen;
