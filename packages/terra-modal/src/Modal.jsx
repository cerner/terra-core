import React, { PropTypes } from 'react';
import Portal from 'react-portal';
import 'terra-base/lib/baseStyles';
import ModalContent from './ModalContent';
import './Modal.scss';


const propTypes = {
  /**
   * String that labels the modal for screen readers
   **/
  ariaLabel: PropTypes.string.isRequired,
  /**
   * This callback is called when the closing event is triggered but it prevents normal removal from the DOM. So, you can do some DOMNode animation first and then call removeFromDOM() that removes the modal from DOM.
   **/
  beforeClose: PropTypes.func,
  /**
   * Content inside the modal dialog
   **/
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are append to the modal
   **/
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are append to the overlay
   **/
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when the esc key is pressed
   **/
  closeOnEsc: PropTypes.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal
   **/
  closeOnOutsideClick: PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes
   **/
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal will rendered as opened
   **/
  isOpened: PropTypes.bool.isRequired,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   * It is recommended not to use this prop and instead create a HOC
   * with the modal dialog body set to scroll.
   **/
  isScrollable: PropTypes.bool,
  /**
   * This callback is called when the modal closes and after beforeClose.
   **/
  onClose: PropTypes.func,
  /**
   * This callback is called when the modal is opened and rendered (useful for animating the DOMNode).
   **/
  onOpen: PropTypes.func,
  /**
   * Function to set isOpened={false} and close the modal.
   **/
  onRequestClose: PropTypes.func.isRequired,
  /**
   * This callback is called when the modal is (re)rendered.
   **/
  onUpdate: PropTypes.func,
  /**
   * Role attribute on the modal dialog
   **/
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
  isOpened: false,
  isScrollable: false,
  role: 'document',
};

const KEYCODES = {
  ESCAPE: 27,
};

class Modal extends React.Component {
  constructor() {
    super();
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(e) {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpened && this.props.closeOnEsc) {
      this.props.onRequestClose();
    }
  }

  render() {
    const {
          ariaLabel,
          beforeClose,
          children,
          classNameModal,
          classNameOverlay,
          closeOnEsc,
          closeOnOutsideClick,
          isFullscreen,
          isOpened,
          isScrollable,
          onClose,
          onOpen,
          onUpdate,
          role,
          onRequestClose,
           ...customProps } = this.props;

    if (!isOpened) {
      return null;
    }

    return (
      <Portal
        isOpened={isOpened}
        onClose={onClose}
        onOpen={onOpen}
        onUpdate={onUpdate}
        beforeClose={beforeClose}
        {...customProps}
      >
        <ModalContent
          closeOnOutsideClick={closeOnOutsideClick}
          ariaLabel={ariaLabel}
          classNameModal={classNameModal}
          classNameOverlay={classNameOverlay}
          role={role}
          isFullscreen={isFullscreen}
          isScrollable={isScrollable}
          onRequestClose={onRequestClose}
        >
          {children}
        </ModalContent>
      </Portal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
