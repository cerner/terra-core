import React from 'react';
import PropTypes from 'prop-types';
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
  * Incidates if the icon spinner should be animated.
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

const LoadingOverlay = (props) => {
  const { message, isAnimated, ...customProps } = props;

  if ('onRequestClose' in customProps) {
    delete customProps.onRequestClose;
  }

  return (
    <Overlay className="terra-LoadingOverlay" contentClassName="terra-LoadingOverlay-content" {...customProps} >
      <IconSpinner className="terra-LoadingOverlay-icon" isSpin={isAnimated} />
      <span className="terra-LoadingOverlay-message">{message}</span>
    </Overlay>
  );
};

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;
