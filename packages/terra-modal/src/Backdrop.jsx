import React, { PropTypes } from 'react';

const propTypes = {
  /**
   * Allow closing modal by clicking modal backdrop
   */
  canCloseOnBackdropClick: PropTypes.bool,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  canCloseOnBackdropClick: true,
};

const Backdrop = props => (
  <button
    title="terra-modal-backdrop"
    className="terra-Modal-backdrop"
    onClick={props.onRequestClose}
    disabled={!props.canCloseOnBackdropClick}
  />
);

Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

export default Backdrop;
