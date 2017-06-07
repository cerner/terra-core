import React from 'react';
import PropTypes from 'prop-types';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import 'terra-base/lib/baseStyles';

import Overlay from './Overlay';
import './Overlay.scss';

const propTypes = {
 /*
 * The message to be displayed
 */
  message: PropTypes.string,
  /*
  * Incidates if the icon spinner should spin
  */
  isSpin: PropTypes.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear']),
  /*
  * Incidates if the overlay is open
  */
  isOpen: PropTypes.bool,
  /*
  * Indicates if the overlay is relative to the triggering container
  */
  isRelativeToContainer: PropTypes.bool,
  /*
  * Indicates if the background scrolling is enabled
  */
  isFixed: PropTypes.bool,
};

const defaultProps = {
  message: 'Loading...',
  isSpin: false,
  isOpen: false,
  background: 'light',
  isRelativeToContainer: false,
  isFixed: false,
};

const LoadingOverlay = ({ message, isSpin, ...customProps }) => (
  <Overlay className="terra-LoadingOverlay" {...customProps} >
    <IconSpinner className="terra-LoadingOverlay-icon" isSpin={isSpin} />
    <span className="terra-LoadingOverlay-message">{message}</span>
  </Overlay>
);

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;
