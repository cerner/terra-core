import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import styles from '../Button.module.scss';
import { ButtonVariants, ButtonTypes, IconTypes } from '../_constants';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A icon to be displayed nested inline with the text when provided.
   */
  icon: PropTypes.element.isRequired,
  /**
   * specifies the icon type.
   * refer Icon [Accessiblity Guide](https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/icon/accessibility-guide) to know about types of icon.
   */
  iconType: PropTypes.oneOf([IconTypes.DECORATIVE, IconTypes.INFORMATIVE]).isRequired,
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
   * If the button is `isIconOnly` or variant `utility` this text is set as the aria-label and title for accessibility.
   */
  text: PropTypes.string,
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
   * Sets the button variant. One of `action` or `utility`.
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

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.shouldShowFocus = true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.focused && nextProps.isDisabled) {
      return { focused: false };
    }
    return null;
  }

  handleOnBlur(event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleClick(event) {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked if it is not currently the active element.
    if (document.activeElement !== event.currentTarget) {
      this.shouldShowFocus = false;
      event.currentTarget.focus();
      this.shouldShowFocus = true;
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });
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

  handleFocus(event) {
    if (this.shouldShowFocus) {
      this.setState({ focused: true });
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  handleMouseDown(event) {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }

    // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus#Notes
    // If you call HTMLElement.focus() from a mousedown event handler, you must call event.preventDefault() to keep the focus from leaving the HTMLElement.
    // Otherwise, when you click on the button again, focus would leave the button and onBlur would get called causing the document.activeElement would no longer be the focused button.
    event.preventDefault();
  }

  render() {
    const {
      icon,
      iconType,
      isBlock,
      isCompact,
      isDisabled,
      isIconOnly,
      isReversed,
      text,
      type,
      variant,
      onClick,
      onMouseDown,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      refCallback,
      title,
      ...customProps
    } = this.props;

    // To prevent prop from getting added to DOM
    delete customProps.iconType;

    const theme = this.context;

    const buttonClasses = classNames(
      cx([
        'button',
        variant,
        { 'is-disabled': isDisabled },
        { block: isBlock },
        { compact: isCompact },
        { 'is-active': this.state.active && !isDisabled },
        { 'is-focused': this.state.focused && !isDisabled },
        theme.className,
      ]),
      customProps.className,
    );

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

    let buttonTitle = title;
    if (isIconOnly || variant === 'utility') {
      buttonTitle = title || text;
    }

    const buttonLabel = (
      <span className={buttonLabelClasses}>
        {isReversed ? buttonText : buttonIcon}
        {isReversed ? buttonIcon : buttonText}
      </span>
    );

    if ((isIconOnly || variant === 'utility') && !customProps['aria-label']) {
      customProps['aria-label'] = text;
    }

    if (iconType === IconTypes.DECORATIVE) {
      delete customProps['aria-label'];
    }

    /* eslint-disable react/button-has-type */
    return (
      <button
        {...customProps}
        className={buttonClasses}
        type={type}
        disabled={isDisabled}
        tabIndex={isDisabled ? '-1' : customProps.tabIndex}
        aria-disabled={isDisabled}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        title={buttonTitle}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onFocus={this.handleFocus}
        ref={refCallback}
      >
        {buttonLabel}
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
IconButton.contextType = ThemeContext;

IconButton.Opts = {};
IconButton.Opts.Types = ButtonTypes;
IconButton.Opts.Variants = ButtonVariants;
IconButton.Opts.IconTypes = IconTypes;

export default IconButton;
