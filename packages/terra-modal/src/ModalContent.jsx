import React, { PropTypes } from 'react';
import FocusTrap from 'focus-trap-react';
import ModalOverlay from './ModalOverlay';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  closePortal: PropTypes.func,
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  role: 'dialog',
};


class ModalContent extends React.Component {

  componentDidMount() {
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable background scrolling
    document.body.style.overflow = null;
  }

  render() {
    const {
        ariaLabel,
        children,
        classNameModal,
        classNameOverlay,
        closeOnOutsideClick,
        closePortal,
        role,
        ...customProps } = this.props;

    return (
      <FocusTrap>
        <ModalOverlay
          onClick={closeOnOutsideClick ? closePortal : null}
          className={classNameOverlay}
        />
        <div
          aria-label={ariaLabel}
          className={classNameModal}
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
