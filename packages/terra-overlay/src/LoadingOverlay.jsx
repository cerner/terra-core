import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import { FormattedMessage } from 'react-intl';
import Overlay from './Overlay';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

const { BackgroundStyles, zIndexes } = Overlay.Opts;

const propTypes = {
  /**
   * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear' or BackgroundStyles.LIGHT, BackgroundStyles.DARK, and BackgroundStyles.CLEAR.
   */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear', BackgroundStyles]),
  /**
   * Indicates if the icon spinner should be animated.
   */
  isAnimated: PropTypes.bool,
  /**
   * Indicates if the overlay is open.
   */
  isOpen: PropTypes.bool,
  /**
   * Indicates if the overlay is relative to the triggering container.
   */
  isRelativeToContainer: PropTypes.bool,
  /**
   * The message to be displayed within the overlay.
   */
  message: PropTypes.string,
  /**
   * Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the overlay when it is opened in a portal.
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

const LoadingOverlay = ({
  isAnimated,
  message,
  rootSelector,
  ...customProps
}) => {
  // eslint-disable-next-line no-param-reassign
  delete customProps.onRequestClose;

  return (
    <Overlay {...customProps} className={cx('loading-overlay', customProps.className)} rootSelector={rootSelector}>
      <IconSpinner className={cx('icon')} isSpin={isAnimated} height="36" width="36" />
      {message !== undefined
        ? <div className={cx('message')}>{message}</div>
        : (
          <FormattedMessage id="Terra.Overlay.loading">
            {loadingMessage => (
              <div className={cx('message')}>{loadingMessage}</div>
            )}
          </FormattedMessage>
        )}
    </Overlay>
  );
};

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.Opts = Overlay.Opts;

export default LoadingOverlay;
