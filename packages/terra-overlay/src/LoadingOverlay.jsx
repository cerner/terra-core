import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import 'terra-base/lib/baseStyles';

import Overlay from './Overlay';
import styles from './Overlay.scss';

const cx = classNames.bind(styles);

const BackgroundStyles = Overlay.Opts.BackgroundStyles;

const propTypes = {
 /**
 * The message to be displayed within the overlay.
 */
  message: PropTypes.string,
  /**
  * Indicates if the icon spinner should be animated.
  */
  isAnimated: PropTypes.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear' or BackgroundStyles.LIGHT, BackgroundStyles.DARK, and BackgroundStyles.CLEAR.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear', BackgroundStyles]),
  /**
  * Indicates if the overlay is open.
  */
  isOpen: PropTypes.bool,
  /**
  * Indicates if the overlay is relative to the triggering container.
  */
  isRelativeToContainer: PropTypes.bool,
};

const defaultProps = {
  isAnimated: false,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isRelativeToContainer: false,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
  /* eslint-enable consistent-return */
};

const LoadingOverlay = ({
  message,
  isAnimated,
  ...customProps }, {
  intl,
}) => {
  // eslint-disable-next-line no-param-reassign
  delete customProps.onRequestClose;

  const loadingMessage = message !== undefined ? message : intl.formatMessage({ id: 'Terra.Overlay.loading' });

  return (
    <Overlay {...customProps} className={cx('loading-overlay', customProps.className)} >
      <IconSpinner className={cx('icon')} isSpin={isAnimated} height="36" width="36" />
      <div className={cx('message')}>{loadingMessage}</div>
    </Overlay>
  );
};

const Opts = { BackgroundStyles };

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.contextTypes = contextTypes;
LoadingOverlay.Opts = Opts;

export default LoadingOverlay;
