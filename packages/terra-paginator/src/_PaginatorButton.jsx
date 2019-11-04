import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { disableFocusActiveStyles, disableFocusOnBlur, enableFocusActiveStyles } from './_paginationUtils';
import styles from './Paginator.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets aria-current attribute.
   */
  ariaCurrent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /**
   * Sets aria-disabled attribute.
   */
  ariaDisabled: PropTypes.bool,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Child elements passed in to buttons.
   */
  children: PropTypes.node,
  /**
   * Passed in CSS className.
   */
  className: PropTypes.string,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
};

function PaginatorButton(props) {
  let shouldShowFocus = true;

  const handleFocus = (event) => {
    if (shouldShowFocus) event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
  };

  const handleMouseDown = () => {
    // Prevent button from showing focus styles when clicked
    shouldShowFocus = false;
    // Wait until after onFocus has been triggered on browsers where it will get triggered for click
    setTimeout(() => { shouldShowFocus = true; });
  };

  const {
    ariaCurrent,
    ariaDisabled,
    ariaLabel,
    children,
    className,
    onClick,
  } = props;

  return (
    <button
      aria-current={ariaCurrent}
      aria-disabled={ariaDisabled}
      aria-label={ariaLabel}
      className={cx(className)}
      onBlur={(e) => disableFocusOnBlur(e)}
      onClick={onClick}
      onFocus={(e) => handleFocus(e)}
      onKeyDown={(e) => enableFocusActiveStyles(e)}
      onKeyUp={(e) => disableFocusActiveStyles(e)}
      onMouseDown={handleMouseDown}
      type="button"
    >
      {children}
    </button>
  );
}

PaginatorButton.propTypes = propTypes;

export default PaginatorButton;
