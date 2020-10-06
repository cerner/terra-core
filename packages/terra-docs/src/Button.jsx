import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Button.module.scss';

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
  * The button text.
  */
  children: PropTypes.string,
};

const Button = ({
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

  return (
    <button
      {...customProps}
      type="button"
      className={buttonClassNames}
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
