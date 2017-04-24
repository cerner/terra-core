import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Button.scss';

const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * Sets the href. When set will render the component as an anchor tag
   */
  href: PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Whether or not the button should display as a block
   */
  isBlock: PropTypes.bool,
  /**
   * Whether or not the button has reduced padding
   */
  isCompact: PropTypes.bool,
  /**
   * Whether or not the button should be disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * Sets the button variant. One of primary, secondary, or link
   */
  variant: PropTypes.oneOf(['default', 'link', 'primary', 'secondary']),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isReversed: false,
  variant: 'default',
};

const Button = ({
  children,
  icon,
  isBlock,
  isCompact,
  isDisabled,
  isReversed,
  size,
  text,
  variant,
  ...customProps
  }) => {
  const attributes = Object.assign({}, customProps);
  const buttonText = text ? <span className="terra-Button-text">{text}</span> : null;

  attributes.className = classNames([
    'terra-Button',
    `terra-Button--${variant}`,
    { 'is-disabled': isDisabled },
    { [`terra-Button--${size}`]: size },
    { 'terra-Button--block': isBlock },
    { 'terra-Button--compact': isCompact },
    attributes.className,
  ]);

  attributes.disabled = isDisabled;
  attributes.tabIndex = isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = isDisabled;

  const order = isReversed ?
    [buttonText, icon, children] :
    [icon, buttonText, children];

  return React.createElement(attributes.href ? 'a' : 'button', attributes, ...order);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
