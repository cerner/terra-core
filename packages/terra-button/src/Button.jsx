import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const ButtonVariants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
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
   * Sets the button text. If the button `isIconOnly` or of variant `utility`, this text is set as the aria-label for accessibility.
   * It is also used to reveal the label to the user via the browser-native tooltip upon hovering over a `isIconOnly` button.
   */
  text: PropTypes.string.isRequired,
  /**
   * Sets the button type. One of `button`, `submit`, or `reset`.
   */
  type: PropTypes.oneOf([ButtonTypes.BUTTON, ButtonTypes.SUBMIT, ButtonTypes.RESET]),
  /**
   * Sets the button variant. One of `neutral`,  `emphasis`, `de-emphasis`, `action` or `utility`.
   */
  variant: PropTypes.oneOf([ButtonVariants.NEUTRAL, ButtonVariants.EMPHASIS, ButtonVariants['DE-EMPHASIS'], ButtonVariants.ACTION, ButtonVariants.UTILITY]),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isIconOnly: false,
  isReversed: false,
  refCallback: undefined,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.NEUTRAL,
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });

      // Follow href on space keydown when rendered as an anchor tag
      if (this.props.href) {
        // Prevent window scrolling
        event.preventDefault();
        window.location.href = this.props.href;
      }
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  render() {
    const {
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
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      refCallback,
      ...customProps
    } = this.props;

    const buttonClasses = cx([
      'button',
      variant,
      { 'is-disabled': isDisabled },
      { block: isBlock },
      { compact: isCompact },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);

    const buttonLabelClasses = cx([
      'button-label',
      { 'text-and-icon': icon && !isIconOnly && variant !== 'utility' },
      { 'icon-only': isIconOnly || variant === 'utility' },
      { 'text-only': !icon },
    ]);

    const buttonTextClasses = cx([
      { 'text-first': icon && isReversed },
    ]);

    const iconClasses = cx([
      'icon',
      { 'icon-first': (!isIconOnly && variant !== 'utility') && !isReversed },
    ]);

    const buttonText = !isIconOnly && variant !== 'utility' ? <span className={buttonTextClasses}>{text}</span> : null;

    let buttonIcon = null;
    if (icon) {
      const iconSvgClasses = icon.props.className ? `${icon.props.className} ${cx('icon-svg')}` : cx('icon-svg');
      const cloneIcon = React.cloneElement(icon, { className: iconSvgClasses });
      buttonIcon = <span className={iconClasses}>{cloneIcon}</span>;
    }

    const buttonLabel = (
      <span className={buttonLabelClasses}>
        {isReversed ? buttonText : buttonIcon }
        {isReversed ? buttonIcon : buttonText }
      </span>
    );
    const ComponentType = href ? 'a' : 'button';

    return (
      <ComponentType
        {...customProps}
        className={buttonClasses}
        type={type}
        disabled={isDisabled}
        tabIndex={isDisabled ? '-1' : undefined}
        aria-disabled={isDisabled}
        aria-label={isIconOnly || variant === 'utility' ? text : null}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        title={isIconOnly ? text : null}
        onClick={onClick}
        onFocus={onFocus}
        href={href}
        ref={refCallback}
      >
        {buttonLabel}
      </ComponentType>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.Opts = {};
Button.Opts.Types = ButtonTypes;
Button.Opts.Variants = ButtonVariants;

export default Button;
export { ButtonTypes, ButtonVariants };
