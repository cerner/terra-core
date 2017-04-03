import React, { PropTypes } from 'react';
import classNames from 'classnames';
const FocusTrap = require('focus-trap-react');
const displace = require('react-displace');
import './Modal.scss';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnOverlay: PropTypes.bool,
  getApplicationNode: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnOverlay: true,
  getApplicationNode: null,
  isFullscreen: false,
  isOpen: false,
  onRequestClose: null,
  role: 'dialog',
};


class Modal extends React.Component {
  componentDidMount() {
    const applicationNode = this.getApplicationNode();
    if (applicationNode) {
      applicationNode.setAttribute('aria-hidden', 'true');
    }
  }

  componentWillUnmount() {
    const applicationNode = this.getApplicationNode();
    if (applicationNode) {
      applicationNode.setAttribute('aria-hidden', 'false');
    }
  }

  getApplicationNode() {
    return this.props.getApplicationNode();
  }

  clickOverlay(e) {
    e.preventDefault();

    if (this.props.onRequestClose) {
      this.onRequestClose();
    }
  }

  render() {
    const { ariaLabel, classNameModal, classNameOverlay, children, closeOnOverlay, getApplicationNode, isFullscreen, isOpen, onRequestClose, role, ...customProps } = this.props;

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

    customProps['aria-label'] = ariaLabel;

    return (
      <div className="matt">
        <div {...customProps} className={modalClassName}>
          {children}
        </div>
        <div className={overlayClassName} onClick={e => this.clickOverlay(e)} />
      </div>
    );
  }
}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

let DisplacedModal = displace(Modal);

DisplacedModal.renderTo = function(input) {
  return displace(Modal, { renderTo: input });
};

export default DisplacedModal;
