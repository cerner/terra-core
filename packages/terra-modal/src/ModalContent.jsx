import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import 'terra-base/lib/baseStyles';
import ModalOverlay from './ModalOverlay';
import styles from './Modal.scss';

const cx = classNames.bind(styles);

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
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * If set to true, the modal will trap the focus and prevents any popup within the modal from gaining focus.
   */
  isFocused: PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal is to be presented at the appropriate z-index for notification dialogs.
   */
  isNotificationDialog: PropTypes.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: PropTypes.bool,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFocused: true,
  isFullscreen: false,
  isNotificationDialog: false,
  isScrollable: false,
  role: 'dialog',
};

/* eslint-disable react/prefer-stateless-function */
class ModalContent extends React.Component {
  render() {
    const {
      ariaLabel,
      children,
      classNameModal,
      classNameOverlay,
      closeOnOutsideClick,
      onRequestClose,
      role,
      isFocused,
      isFullscreen,
      isNotificationDialog,
      isScrollable,
      ...customProps
    } = this.props;

    const modalClassName = cx([
      'modal',
      { 'fixed-size': !isFullscreen },
      { notification: isNotificationDialog },
      { scrollable: isScrollable },
      classNameModal,
    ]);

    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;

    return (
      <FocusTrap
        paused={!isFocused}
      >
        <ModalOverlay
          onClick={closeOnOutsideClick ? onRequestClose : null}
          className={classNameOverlay}
          isNotificationDialog={isNotificationDialog}
        />
        <div
          tabIndex="0"
          aria-label={ariaLabel}
          className={modalClassName}
          role={role}
          {...customProps}
        >
          {children}
        </div>
      </FocusTrap>
    );
  }
}

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
