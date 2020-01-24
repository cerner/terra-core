import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets aria-current attribute.
   */
  ariaCurrent: PropTypes.bool,
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
   * Sets the disabled attribute based on the selected page..
   */
  disabled: PropTypes.bool,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Tab Index of selected button.
   */
  tabIndex: PropTypes.string,
};

const setFocusActiveStyles = (setActive, setFocused, event) => {
  if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
    setFocused(true);
  }

  if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
    if (event.type === 'keydown') {
      setActive(true);
      setFocused(false);
    } else {
      setActive(false);
      setFocused(true);
    }
  }
};

const handleOnBlur = (setActive, setFocused) => {
  setActive(false);
  setFocused(false);
};

const handleMouseDown = (event) => {
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
  // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
  // This will put focus on the button when clicked if it is not currently the active element.
  if (document.activeElement !== event.currentTarget) {
    event.currentTarget.focus();
  }
  event.preventDefault();
};

function PaginatorButton(props) {
  const [isActive, setActive] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const buttonFocused = isFocused ? 'is-focused' : undefined;
  const buttonActive = isActive ? 'is-active' : undefined;

  const {
    ariaCurrent,
    ariaDisabled,
    ariaLabel,
    children,
    className,
    disabled,
    onClick,
    tabIndex,
  } = props;

  useEffect(() => {
    setActive(false);
  }, [disabled]);

  return (
    <button
      aria-current={ariaCurrent}
      aria-disabled={ariaDisabled}
      aria-label={ariaLabel}
      className={cx([buttonActive, buttonFocused, className])}
      disabled={disabled}
      onBlur={() => handleOnBlur(setActive, setFocused)}
      onClick={onClick}
      onKeyDown={(e) => setFocusActiveStyles(setActive, setFocused, e)}
      onKeyUp={(e) => setFocusActiveStyles(setActive, setFocused, e)}
      onMouseDown={handleMouseDown}
      tabIndex={tabIndex}
      type="button"
    >
      {children}
    </button>
  );
}

PaginatorButton.propTypes = propTypes;

export default PaginatorButton;
