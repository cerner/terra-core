import React, { PropTypes } from 'react';
import Portal from '../src/Portal';
import Backdrop from '../src/Backdrop';
import Dialog from '../src/Dialog';
import ModalManager from '../src/ModalManager';
import '../src/Modal.scss';

const modalManager = new ModalManager();

/**
 * A modal is a dialog prompt containing additional information to be revealed to the user.
 * It consists of a backdrop, a modal dialog with a header/body/footer.
 * It offers a few helpful features:
 * - Support scrolling of content within the modal window.
 * - Disable background scrolling when a modal window is displayed on a page.
 * - Allow closing the modal on backdrop click, ESC key, close button inside dialog.
 * - Keyboard navigation stays inside of the modal
 */
const propTypes = {
  /**
   * Whether or not the modal is open
   */
  isOpen: PropTypes.bool,
  /**
   * Set aria-label for modal dialog
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Set modal dialog to full screen
   */
  isFullScreen: PropTypes.bool,
  /**
   * Set the max-width for modal dialog
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Callback function for closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Allow closing modal by clicking modal backdrop
   */
  canCloseOnBackdropClick: PropTypes.bool,
  /**
   * Displays close button on the top right(ltr) of container
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Modal header
   */
  header: PropTypes.element,
  /**
  * Modal body
  */
  body: PropTypes.element,
  /**
  * Modal footer
  */
  footer: PropTypes.element,
};

const defaultProps = {
  isOpen: false,
  isFullScreen: false,
  size: 'medium',
  canCloseOnBackdropClick: true,
  hasCloseButton: true,
};

class Modal extends React.Component {
  constructor() {
    super();
    this.trapFocus = this.trapFocus.bind(this);
    this.handleEscKeyup = this.handleEscKeyup.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.onOpen();
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.onOpen();
    } else {
      this.onClose();
    }
  }

  onOpen() {
    modalManager.add(this);
    document.addEventListener('focus', this.trapFocus, true);
    document.addEventListener('keyup', this.handleEscKeyup);
    this.focus();
  }

  onClose() {
    modalManager.remove(this);
    document.removeEventListener('focus', this.trapFocus, true);
    document.removeEventListener('keyup', this.handleEscKeyup);
    this.restoreFocus();
  }

  focus() {
    const currentActive = document.activeElement;
    const dialog = this.modal.lastElementChild;
    this.focusBeforeOpen = currentActive;
    dialog.focus();
  }

  trapFocus() {
    const currentActive = document.activeElement;
    const dialog = this.modal.lastElementChild;
    if (dialog !== currentActive && !dialog.contains(currentActive)) {
      dialog.focus();
    }
  }

  restoreFocus() {
    if (this.focusBeforeOpen && this.focusBeforeOpen.focus) {
      this.focusBeforeOpen.focus();
      this.focusBeforeOpen = null;
    }
  }

  handleEscKeyup(e) {
    if (e.keyCode === 27) {
      this.props.onRequestClose();
    }
  }

  render() {
    return (
      <Portal isOpen={this.props.isOpen}>
        <div ref={(modal) => { this.modal = modal; }}>
          <Backdrop
            canCloseOnBackdropClick={this.props.canCloseOnBackdropClick}
            onRequestClose={this.props.onRequestClose}
          />
          <Dialog
            ariaLabel={this.props.ariaLabel}
            isFullScreen={this.props.isFullScreen}
            size={this.props.size}
            onRequestClose={this.props.onRequestClose}
            hasCloseButton={this.props.hasCloseButton}
            header={this.props.header}
            body={this.props.body}
            footer={this.props.footer}
          />
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
