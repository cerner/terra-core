import React, { PropTypes } from 'react';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import Portal from 'react-portal';
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
    const { ariaLabel,
            beforeClose,
            children,
            classNameModal,
            classNameOverlay,
            closeOnEsc,
            closeOnOutsideClick,
            isFullscreen,
            isOpen,
            onClose,
            onOpen,
            onUpdate,
            openByClickOn,
            role,
            ...customProps } = this.props;

    if (!isOpen) {
      return null;
    }

    let modalClassName = classNames([
      classNameModal,
      'terra-Modal',
      { 'terra-Modal--fullscreen': isFullscreen },
    ]);

    let overlayClassName = classNames([
      classNameOverlay,
      'terra-Modal-overlay',
    ]);

    return (
      <Portal isOpen={this.props.isOpen}
              openByClickOn={this.props.openByClickOn}
              closeOnEsc={this.props.closeOnEsc}
              closeOnOutsideClick={this.props.closeOnOutsideClick}
              onOpen={this.props.onOpen}
              beforeClose={this.props.beforeClose}
              onClose={this.props.onClose}
              onUpdate={this.props.onUpdate}
      >
        <div>
          <FocusTrap>
            <div className={modalClassName}
                 aria-label={ariaLabel}
                 role={role}
            >
              {children}
            </div>
          </FocusTrap>
        </div>
      </Portal>
    );
  }
}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
