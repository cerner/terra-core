import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import styles from './ButtonGroup.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An optional icon. If an icon is provided, it will be an icon only button and the provided text is set as the aria-label for accessibility.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
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
   * Sets the button text. If an icon is provided, it will be an icon only button and this text is set as the aria-label for accessibility.
   */
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

class ButtonGroupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.shouldShowFocus = false;
  }

  handleOnBlur(event) {
    if (document.activeElement === event.currentTarget && this.state.focused) {
      this.shouldShowFocus = true;
    } else {
      this.shouldShowFocus = false;
      this.setState({ focused: false });
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleKeyDown(event) {
    // Add focus styles for keyboard navigation.
    // The onFocus event doesn't get triggered in some browsers, hence, the focus state needs to be managed here.
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Apply focus styles for keyboard navigation.
    // The onFocus event doesn't get triggered in some browsers, hence, the focus state needs to be managed here.
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
      this.shouldShowFocus = true;
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

  render() {
    const {
      icon,
      isDisabled,
      onFocus,
      ...customProps
    } = this.props;

    const theme = this.context;

    const buttonClassName = classNames(
      cx(
        'button-group-button',
        { 'is-disabled': isDisabled },
        { 'is-focused': this.state.focused && !isDisabled },
        theme.className,
      ),
      customProps.className,
    );

    return (
      <Button
        {...customProps}
        icon={icon}
        isDisabled={isDisabled}
        isIconOnly={icon != null}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onFocus={this.handleFocus}
        variant={Button.Opts.Variants.NEUTRAL}
        className={buttonClassName}
      />
    );
  }
}

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;
ButtonGroupButton.contextType = ThemeContext;

export default ButtonGroupButton;
