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
   * Child Nodes
   */
  children: PropTypes.node,
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
   *  React `ref` callback to receive and store a reference to the mounted button instance.
   */
  refCallback: PropTypes.func,
  /**
   * Sets the button text.
   */
  text: PropTypes.string.isRequired,
  /**
   * Sets the button type. One of `button`, `submit`, or `reset`.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Sets the button variant. One of `neutral`,  `emphasis`, `de-emphasis`, `utility` or `action`.
   */
  variant: PropTypes.oneOf(['neutral', 'emphasis', 'de-emphasis', 'utility', 'action']),
};

const defaultProps = {
  isBlock: false,
  isDisabled: false,
  isIconOnly: false,
  isReversed: false,
  refCallback: undefined,
  type: 'button',
  variant: 'neutral',
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
    event.stopPropagation();
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
      children,
      icon,
      isBlock,
      isDisabled,
      isIconOnly,
      isReversed,
      refCallback,
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
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);

    const buttonLabelClasses = cx([
      { 'text-only': !icon },
      { 'text-left': icon && isReversed },
      { 'text-right': icon && !isReversed },
    ]);

    const iconClasses = cx([
      'icon',
      { 'icon-only': isIconOnly || variant === 'utility' },
      { 'icon-left': (!isIconOnly && variant !== 'utility') && !isReversed },
      { 'icon-right': (!isIconOnly && variant !== 'utility') && isReversed },
    ]);

    const buttonLabel = !isIconOnly && variant !== 'utility' ? <span className={buttonLabelClasses}>{text}</span> : null;
    const buttonIcon = icon ? <span className={iconClasses}>{icon}</span> : null;

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
        ref={refCallback}
      >
        {isReversed ? buttonLabel : buttonIcon }
        {isReversed ? buttonIcon : buttonLabel }
        {children}
      </ComponentType>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.Opts = { };
Button.Opts.Types = ButtonTypes;
Button.Opts.Variants = ButtonVariants;

export default Button;
