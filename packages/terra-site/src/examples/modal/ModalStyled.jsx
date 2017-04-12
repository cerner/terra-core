import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';
import IconClose from 'terra-icon/lib/icon/IconClose';
import ModalHeader from './ModalDialog/ModalHeader';
import ModalSubheader from './ModalDialog/ModalSubheader';
import ModalBody from './ModalDialog/ModalBody';
import ModalFooter from './ModalDialog/ModalFooter';
import ModalDialog from './ModalDialog/ModalDialog';
import './ModalDialog/ModalDialog.scss';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: true
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

 handleOpenModal() {
  this.setState({ isOpened: true });
 }

 handleCloseModal() {
  this.setState({ isOpened: false });
 }

 render() {
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        isOpened={this.state.isOpened}
      >
        <ModalDialog>
          <ModalHeader>
            Header
            <button className={'terra-Modal-close'} onClick={this.handleCloseModal}>
              <IconClose/>
            </button>
          </ModalHeader>
          <ModalSubheader>Subheader</ModalSubheader>
          <ModalBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
      <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}


export default ModalDefault;

