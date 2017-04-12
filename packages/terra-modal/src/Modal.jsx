import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';
import ModalDialog from './ModalDialog';
import classNames from 'classnames';
import './Modal.scss';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  beforeClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnEsc:  PropTypes.bool,
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
  role: 'dialog',
};

class Modal extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.documentElement.style.overflow = null;
  }

  render() {
    const {
          ariaLabel,
          beforeClose,
          classNameModal,
          classNameOverlay,
          closeOnEsc,
          closeOnOutsideClick,
          isFullscreen,
          isOpened,
          onClose,
          onOpen,
          onUpdate,
          openByClickOn,
          role,
           ...customProps} = this.props;

    const modalClassName = classNames(['terra-Modal',
      { 'terra-Modal--fullscreen': isFullscreen },
      classNameModal,
      ]);

    const overlayClassName = classNames(['terra-Modal-overlay', classNameOverlay]);

    return (
        <Portal
                isOpened={isOpened}
                closeOnEsc={this.props.closeOnEsc}
                closeOnOutsideClick={closeOnOutsideClick}
                openByClickOn={this.props.openByClickOn}
                onClose={onClose}
                onOpen={onOpen}
                onUpdate={onUpdate}
                beforeClose={beforeClose}
        >
          <ModalDialog
            closeOnOutsideClick={closeOnOutsideClick}
            ariaLabel={ariaLabel}
            classNameModal={modalClassName}
            classNameOverlay={overlayClassName}
            role={role}
          >
            {this.props.children}
          </ModalDialog>
        </Portal>
    );
  }
}
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

 export default Modal;
