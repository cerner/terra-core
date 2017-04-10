import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';
import ModalDialog from './ModalDialog';
import './Modal.scss';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  beforeClose: PropTypes.func,
  children: PropTypes.node,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnEsc:  PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onUpdate: PropTypes.func,
  openByClickOn: PropTypes.element,
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpen: false,
  openByClickOn: null,
  role: 'dialog',
};

class Modal extends React.Component {

  render() {
    return (

        <Portal closeOnEsc={this.props.closeOnEsc}
                closeOnOutsideClick={this.props.closeOnOutsideClick}
                openByClickOn={this.props.openByClickOn}
                onClose={this.props.onClose}
                onOpen={this.props.onOpen}
                onUpdate={this.props.onUpdate}
                beforeClose={this.props.beforeClose}
        >
          <ModalDialog>
            {this.props.children}
          </ModalDialog>
        </Portal>
    );
  }

}

 export default Modal;
