import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import styles from './ExampleAbstractSize.module.scss';

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
          classNameModal={styles['fixed-size']}
          fallbackFocus={() => (this.focusTrapRef.current)}
        >
          <div style={{
            height: '100%', width: '100%', overflow: 'hidden', backgroundColor: 'lightgreen',
          }}
          >
            Fallback Focus Modal
            <p id="focus-element" ref={this.focusTrapRef} tabIndex="-1">Fallback Element</p>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalCloseFallbackFocusFunction;
