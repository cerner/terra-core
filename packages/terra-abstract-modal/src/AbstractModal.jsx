import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import 'terra-base/lib/baseStyles';
import ModalContent from './_ModalContent';

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Content inside the modal dialog.
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when the esc key is pressed.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Element to fallback focus on if the FocusTrap can not find any focusable elements. Valid values are a valid
   * dom selector string that is passed into document.querySelector or a function
   * that returns a dom element. If using a dom selector, ensure that the query works for all browsers with
   * the document.querySelector method.
   */
  fallbackFocus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  /**
   * If set to true, the modal will trap the focus and prevents any popup within the modal from gaining focus.
   */
  isFocused: PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal will rendered as opened.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFocused: true,
  isFullscreen: false,
  role: 'dialog',
  rootSelector: '[data-terra-base]',
  zIndex: '6000',
};

const KEYCODES = {
  ESCAPE: 27,
};

class AbstractModal extends React.Component {
  constructor() {
    super();
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps) {
    // When the Modal is no longer in focus, it should no longer listen to the keydown event to handle the Escape key.
    // Otherwise, the Modal would also get closed when the intention for pressing the Escape key is to close a popup inside the modal.
    if (!this.props.isFocused && prevProps.isFocused) {
      document.removeEventListener('keydown', this.handleKeydown);
    } else if (this.props.isFocused && !prevProps.isFocused) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    this.toggleVisuallyHiddenMainDocument('false');
  }

  handleKeydown(e) {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpen && this.props.closeOnEsc && this.props.isFocused) {
      this.props.onRequestClose();
    }
  }

  toggleVisuallyHiddenMainDocument(hiddenValue) {
    const mainDocumentElement = document.querySelector(this.props.rootSelector);

    if (mainDocumentElement) {
      mainDocumentElement.setAttribute('aria-hidden', hiddenValue);
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
      fallbackFocus,
      isFocused,
      isFullscreen,
      isOpen,
      role,
      rootSelector,
      onRequestClose,
      zIndex,
      ...customProps
    } = this.props;

    if (!isOpen) {
      this.toggleVisuallyHiddenMainDocument('false');
      return null;
    }
    this.toggleVisuallyHiddenMainDocument('true');


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
          fallbackFocus={fallbackFocus}
          isFocused={isFocused}
          isFullscreen={isFullscreen}
          onRequestClose={onRequestClose}
          zIndex={zIndex}
          aria-modal="true"
        >
          {children}
        </ModalContent>
      </Portal>
    );
  }
}

AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;

export default AbstractModal;
