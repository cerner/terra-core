import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import 'terra-base/lib/baseStyles';

import Overlay from './Overlay';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

const { BackgroundStyles, zIndexes } = Overlay.Opts;

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
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
  /**
  * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are '100', '6000', '7000', '8000', or '9000'.
  */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  isAnimated: false,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isRelativeToContainer: false,
  rootSelector: '#root',
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
  /* eslint-enable consistent-return */
};

const LoadingOverlay = ({
  message,
  isAnimated,
  rootSelector,
  ...customProps
}, {
  intl,
}) => {
  // eslint-disable-next-line no-param-reassign
  delete customProps.onRequestClose;

  const loadingMessage = message !== undefined ? message : intl.formatMessage({ id: 'Terra.Overlay.loading' });

  return (
    <Overlay {...customProps} className={cx('loading-overlay', customProps.className)} rootSelector={rootSelector}>
      <IconSpinner className={cx('icon')} isSpin={isAnimated} height="36" width="36" />
      <div className={cx('message')}>{loadingMessage}</div>
    </Overlay>
  );
};

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.contextTypes = contextTypes;
LoadingOverlay.Opts = Overlay.Opts;

export default LoadingOverlay;
