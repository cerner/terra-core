import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Portal from 'react-portal';
import ModalContent from './ModalContent';
import './Modal.scss';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  beforeClose: PropTypes.func,
  children: PropTypes.element.isRequired,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  isOpened: PropTypes.bool,
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
  isOpened: false,
  openByClickOn: null,
  role: 'document',
};

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
          onClose,
          onOpen,
          onUpdate,
          openByClickOn,
          role,
           ...customProps } = this.props;

    const modalClassName = classNames(['terra-Modal',
      { 'terra-Modal--fullscreen': isFullscreen },
      classNameModal,
    ]);

    const overlayClassName = classNames(['terra-Modal-overlay', classNameOverlay]);

    return (
      <Portal
        isOpened={this.props.isOpened}
        closeOnEsc={closeOnEsc}
        closeOnOutsideClick={closeOnOutsideClick}
        openByClickOn={openByClickOn}
        onClose={onClose}
        onOpen={onOpen}
        onUpdate={onUpdate}
        beforeClose={beforeClose}
        {...customProps}
      >
        <ModalContent
          closeOnOutsideClick={closeOnOutsideClick}
          ariaLabel={ariaLabel}
          classNameModal={modalClassName}
          classNameOverlay={overlayClassName}
          role={role}
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
