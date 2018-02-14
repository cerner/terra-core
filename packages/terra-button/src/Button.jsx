import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

const ButtonVariants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  'DE-EMPSHASIS': 'de-emphasis',
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
   * Sets the button text. If the button `isIconOnly` or of variant `ButtonVariants.UTILITY`, this text is set as the aria-label for accessibility.
   */
  text: PropTypes.string.isRequired,
  /**
   * Sets the button type. One of `ButtonTypes.BUTTON`, `ButtonTypes.SUBMIT`, or `ButtonTypes.RESET`.
   */
  type: PropTypes.oneOf([ButtonTypes.BUTTON, ButtonTypes.SUBMIT, ButtonTypes.RESET]),
  /**
   * Sets the button variant. One of `ButtonVariants.NEUTRAL`,  `ButtonVariants.EMPHASIS`, `ButtonVariants['DE-EMPSHASIS']`, `ButtonVariants.ACTION` or `ButtonVariants.UTILITY`.
   */
  variant: PropTypes.oneOf([ButtonVariants.NEUTRAL, ButtonVariants.EMPHASIS, ButtonVariants['DE-EMPSHASIS'], ButtonVariants.ACTION, ButtonVariants.UTILITY]),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isIconOnly: false,
  isReversed: false,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.NEUTRAL,
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false, mouseWasClicked: false };
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
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: true });

      // Follow href on space keydown when rendered as an anchor tag
      if (this.props.href) {
        // Prevent window scrolling
        event.preventDefault();
        window.location.href = this.props.href;
      }
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
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
      { 'text-and-icon': icon && !isIconOnly },
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
    const buttonIcon = icon ? <span className={iconClasses}>{icon}</span> : null;

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
        onClick={onClick}
        onFocus={onFocus}
        href={href}
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
