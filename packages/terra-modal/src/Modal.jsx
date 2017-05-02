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
  isOpened: PropTypes.bool,
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

/* eslint-disable react/prefer-stateless-function */
class Modal extends React.Component {
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
           ...customProps } = this.props;

    return (
      <Portal
        isOpened={isOpened}
        closeOnEsc={closeOnEsc}
        closeOnOutsideClick={closeOnOutsideClick}
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
