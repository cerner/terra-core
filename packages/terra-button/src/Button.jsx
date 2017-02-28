import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Button.scss';

const propTypes = {
  /**
   * Whether or not the button should display as a block
   */
  isBlock: PropTypes.bool,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Sets the button color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`
   */
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  /**
   * Whether or not the button should be disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Sets the href. When set will render the component as an anchor tag
   */
  href: PropTypes.string,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   * @type String
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * Sets the button variant. One of link or outline
   */
  variant: PropTypes.oneOf(['link', 'outline']),
};

const defaultProps = {
  isBlock: false,
  intent: 'default',
  isDisabled: false,
  isReversed: false,
};

const Button = ({
  isBlock,
  children,
  icon,
  intent,
  isDisabled,
  isReversed,
  size,
  text,
  variant,
  ...customProps
  }) => {
  const attributes = Object.assign({}, customProps);
  const buttonText = text ? <span className="terra-Button-text">{text}</span> : null;

  let style = intent;
  const titleize = s => s.charAt(0).toUpperCase() + s.slice(1);
  if (variant) {
    style = `${variant}${titleize(intent)}`;
  }

  attributes.className = classNames([
    'terra-Button',
    `terra-Button--${style}`,
    { 'is-disabled': isDisabled },
    { [`terra-Button--${size}`]: size },
    { 'terra-Button--block': isBlock },
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
