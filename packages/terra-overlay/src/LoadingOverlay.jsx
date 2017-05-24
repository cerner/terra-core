import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import 'terra-base/lib/baseStyles';

import Overlay from './Overlay';
import './Overlay.scss';

const propTypes = {
 /*
 * The message to be displayed
 */
  message: PropTypes.string,
};

const defaultProps = {
  message: '',
};

const LoadingOverlay = ({ message, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const LoadingOverlayClassNames = classNames([
    'LoadingOverlay',
    attributes.className,
  ]);

  return (
    <Overlay className={LoadingOverlayClassNames} >
      <IconSpinner isSpin />
      <span className="terra-Overlay-content-text">{message}</span>
    </Overlay>
  );
};

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;
