import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import 'terra-base/lib/baseStyles';
import ModalOverlay from './ModalOverlay';
import styles from './Modal.scss';

const cx = classNames.bind(styles);

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  isScrollable: PropTypes.bool,
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
        isScrollable,
        ...customProps } = this.props;

    const modalClassName = cx([
      'modal',
      { 'fixed-size': !isFullscreen },
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
