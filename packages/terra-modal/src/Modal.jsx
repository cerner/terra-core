import React from 'react';
import PropTypes from 'prop-types';
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
  isOpen: PropTypes.bool.isRequired,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   * It is recommended not to use this prop and instead create a HOC
   * with the modal dialog body set to scroll.
   **/
  isScrollable: PropTypes.bool,
  /**
   * Function to set isOpen={false} and close the modal.
   **/
  onRequestClose: PropTypes.func.isRequired,
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
  isOpen: false,
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
    if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpen && this.props.closeOnEsc) {
      this.props.onRequestClose();
    }
  }

  render() {
    const {
          ariaLabel,
          children,
          classNameModal,
          classNameOverlay,
          closeOnEsc,
          closeOnOutsideClick,
          isFullscreen,
          isOpen,
          isScrollable,
          role,
          onRequestClose,
           ...customProps } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <Portal
        isOpened={isOpen}
      >
        <ModalContent
          {...customProps}
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
