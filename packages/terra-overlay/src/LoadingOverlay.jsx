import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import 'terra-base/lib/baseStyles';

import Overlay from './Overlay';
import './Overlay.scss';

const propTypes = {
 /*
 * The message to be displayed within the overlay.
 */
  message: PropTypes.string,
  /*
  * Indicates if the icon spinner should be animated.
  */
  isAnimated: PropTypes.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear']),
  /*
  * Incidates if the overlay is open.
  */
  isOpen: PropTypes.bool,
  /*
  * Indicates if the overlay is relative to the triggering container.
  */
  isRelativeToContainer: PropTypes.bool,
};

const defaultProps = {
  message: 'Loading...',
  isAnimated: false,
  isOpen: false,
  backgroundStyle: 'light',
  isRelativeToContainer: false,
};

const LoadingOverlay = ({ message, isAnimated, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  delete attributes.onRequestClose;

  return (
    <Overlay {...attributes} className={classNames('terra-LoadingOverlay', attributes.className)} >
      <IconSpinner className="terra-LoadingOverlay-icon" isSpin={isAnimated} height="36" width="36" />
      <div className="terra-LoadingOverlay-message">{message}</div>
    </Overlay>
  );
};

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;
