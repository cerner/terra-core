import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import styles from './Button.module.scss';

const cx = classNamesBind.bind(styles);

const ButtonVariants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  GHOST: 'ghost',
  // TODO: this should be removed on the next major version bump
  'DE-EMPHSASIS': 'de-emphasis',
  'DE-EMPHASIS': 'de-emphasis',
  ACTION: 'action',
  UTILITY: 'utility',
};

const ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
};

const propTypes = {
  /**
   * Sets the href. When set will render the component as an anchor tag.
   */
  href: PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the button should only display as an icon.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Whether or not the button should display as a block.
   */
  isBlock: PropTypes.bool,
  /**
   * Whether or not the button has reduced padding
   */
  isCompact: PropTypes.bool,
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: PropTypes.bool,
  /**
   * Callback function triggered when mouse is pressed.
   */
  onMouseDown: PropTypes.func,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when button gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: PropTypes.func,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Sets the button text.
   * If the button is `isIconOnly` or variant `utility` this text is set as the aria-label and title for accessibility
   * `a11yLabel` prop of `icon` will be set as aria-label and title when `icon` has `a11yLabel` prop specified.
   */
  text: PropTypes.string.isRequired,
  /**
   * Additional information to display as a native tooltip on hover.
   * Buttons declared as `isIconOnly` or `utility` will fallback to using `text` if not provided.
   */
  title: PropTypes.string,
  /**
   * Sets the button type. One of `button`, `submit`, or `reset`.
   */
  type: PropTypes.oneOf([ButtonTypes.BUTTON, ButtonTypes.SUBMIT, ButtonTypes.RESET]),
  /**
   * Sets the button variant. One of `neutral`,  `emphasis`, `ghost`, `de-emphasis`, `action` or `utility`.
   */
  variant: PropTypes.oneOf([ButtonVariants.NEUTRAL, ButtonVariants.EMPHASIS, ButtonVariants.GHOST, ButtonVariants['DE-EMPHASIS'], ButtonVariants.ACTION, ButtonVariants.UTILITY]),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isIconOnly: false,
  isReversed: false,
  refCallback: undefined,
  title: undefined,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.NEUTRAL,
};

const Button = ({
  icon,
  isBlock,
  isCompact,
  isDisabled,
  isIconOnly,
  isReversed,
  text,
  type,
  variant,
  href,
  onClick,
  onMouseDown,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  refCallback,
  title,
  ...customProps
}) => {
  const theme = useContext(ThemeContext);

  // We need to manually control active state for FF compatibility
  const [isActive, setIsActive] = useState(false);

  // We manually default focus behaviors for keyboard events.
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Disabling button does not trigger onBlur, we need to manually unfocus
    if (isDisabled) {
      setIsFocused(false);
    }
  }, [isDisabled]);

  const handleOnBlur = (event) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleClick = (event) => {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked if it is not currently the active element.
    if (document.activeElement !== event.currentTarget) {
      event.currentTarget.focus();
      setIsFocused(false);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event) => {
    // Add active state to FF browsers
    if (event.keyCode === KeyCode.KEY_RETURN) {
      setIsFocused(true);
    }

    if (event.keyCode === KeyCode.KEY_SPACE) {
      setIsActive(true);
      setIsFocused(true);

      // Follow href on space keydown when rendered as an anchor tag
      if (href) {
        // Prevent window scrolling
        event.preventDefault();
        window.location.href = href;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = (event) => {
    // Remove active state from FF broswers
    if (event.keyCode === KeyCode.KEY_SPACE) {
      setIsActive(false);
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  const handleMouseDown = (event) => {
    if (onMouseDown) {
      onMouseDown(event);
    }

    // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus#Notes
    // If you call HTMLElement.focus() from a mousedown event handler, you must call event.preventDefault() to keep the focus from leaving the HTMLElement.
    // Otherwise, when you click on the button again, focus would leave the button and onBlur would get called causing the document.activeElement would no longer be the focused button.
    event.preventDefault();
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const buttonClasses = classNames(
    cx([
      'button',
      variant,
      { 'is-disabled': isDisabled },
      { block: isBlock },
      { compact: isCompact },
      { 'is-active': isActive && !isDisabled },
      { 'is-focused': isFocused && !isDisabled },
      theme.className,
    ]),
    customProps.className,
  );

  const isIconOnlyClass = isIconOnly || variant === ButtonVariants.UTILITY;

  const buttonLabelClasses = cx([
    'button-label',
    { 'text-and-icon': icon && !isIconOnlyClass },
    { 'icon-only': isIconOnlyClass },
    { 'text-only': !icon },
  ]);

  const buttonTextClasses = cx([
    { 'text-first': icon && isReversed },
  ]);

  const iconClasses = cx([
    'icon',
    { 'icon-first': !isIconOnlyClass && !isReversed },
  ]);

  const buttonText = !isIconOnlyClass ? <span className={buttonTextClasses}>{text}</span> : null;

  let buttonIcon = null;
  if (icon) {
    const iconSvgClasses = icon.props.className ? `${icon.props.className} ${cx('icon-svg')}` : cx('icon-svg');
    const cloneIcon = React.cloneElement(icon, { className: iconSvgClasses });
    buttonIcon = <span className={iconClasses}>{cloneIcon}</span>;
  }

  let buttonTitle = title;
  let ariaLabel = customProps['aria-label'];

  if (isIconOnlyClass) {
    ariaLabel = (icon && icon.props.a11yLabel) ? icon.props.a11yLabel : ariaLabel || text;
    buttonTitle = (icon && icon.props.a11yLabel) ? icon.props.a11yLabel : title || text;
  }

  const ComponentType = href ? 'a' : 'button';

  return (
    <ComponentType
      {...customProps}
      role={href ? 'button' : customProps.role}
      className={buttonClasses}
      type={type}
      disabled={isDisabled}
      tabIndex={isDisabled ? '-1' : customProps.tabIndex}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={handleOnBlur}
      title={buttonTitle}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onFocus={handleFocus}
      href={href}
      ref={refCallback}
    >
      <span className={buttonLabelClasses}>
        {isReversed ? buttonText : buttonIcon}
        {isReversed ? buttonIcon : buttonText}
      </span>
    </ComponentType>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.Opts = {};
Button.Opts.Types = ButtonTypes;
Button.Opts.Variants = ButtonVariants;

export default Button;
export { ButtonTypes, ButtonVariants };
