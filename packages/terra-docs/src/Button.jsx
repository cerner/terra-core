import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Button.module.scss';

const KEY_RETURN = 13;
const KEY_SPACE = 32;

const cx = classNames.bind(styles);

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
const enableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

const propTypes = {
  /**
  * The main body text of the notice.
  */
  children: PropTypes.string,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: PropTypes.func,
};

const Button = ({
  onKeyDown,
  children,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const buttonClassNames = classNames(
    cx([
      'button',
      theme.className,
    ]),
    customProps.className,
  );

  const handleKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      if (onKeyDown) {
        onKeyDown(event);
      }
    }
  };

  return (
    <button
      {...customProps}
      type="button"
      className={buttonClassNames}
      onKeyDown={event => handleKeyDown(event)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      data-focus-styles-enabled
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
