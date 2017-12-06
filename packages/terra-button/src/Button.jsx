import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  SPACE: 32,
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
  type: 'button',
  variant: 'neutral',
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyDown(event) {
    // This is needed to add the active state to FF browsers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: true });

      // Follow href on space keydown when rendered as an anchor tag
      if (this.props.href) {
        // prevent window scrolling
        event.preventDefault();
        window.location.href = this.props.href;
      }
    }

    if (this.onKeyDown) {
      this.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    if (this.onKeyUp) {
      this.onKeyUp(event);
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
      text,
      type,
      variant,
      ...customProps
    } = this.props;

    this.onKeyDown = customProps.onKeyDown;
    this.onKeyUp = customProps.onKeyUp;
    delete customProps.onKeyDown;
    delete customProps.onKeyUp;

    const attributes = Object.assign({}, customProps);

    const buttonTextClasses = cx([
      { 'text-only': !icon },
      { 'text-left': icon && isReversed },
      { 'text-right': icon && !isReversed },
    ]);
    const buttonText = !isIconOnly && variant !== 'utility' ? <span className={buttonTextClasses}>{text}</span> : null;

    const iconClasses = cx([
      'icon',
      { 'icon-only': isIconOnly || variant === 'utility' },
      { 'icon-left': !isIconOnly && !isReversed },
      { 'icon-right': !isIconOnly && isReversed },
    ]);
    const iconElement = icon ? <span className={iconClasses}>{icon}</span> : null;

    attributes.className = cx([
      'button',
      variant,
      { 'is-disabled': isDisabled },
      { block: isBlock },
      { 'is-active': this.state.active },
      attributes.className,
    ]);

    attributes.type = type;
    attributes.disabled = isDisabled;
    attributes.tabIndex = isDisabled ? '-1' : undefined;
    attributes['aria-disabled'] = isDisabled;
    attributes['aria-label'] = isIconOnly || variant === 'utility' ? text : null;
    attributes.onKeyDown = this.handleKeyDown;
    attributes.onKeyUp = this.handleKeyUp;

    const order = isReversed ?
      [buttonText, iconElement, children] :
      [iconElement, buttonText, children];

    return React.createElement(attributes.href ? 'a' : 'button', attributes, ...order);
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
