import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Button.scss';

const cx = classNames.bind(styles);

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
   * Sets the button size. One of `tiny`, `small`, `medium`, `large`, `huge`
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * Sets the button type. One of `button`, `submit`, or `reset`
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Sets the button variant. One of `primary`, `secondary`, or `link`
   */
  variant: PropTypes.oneOf(['default', 'link', 'primary', 'secondary']),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isReversed: false,
  type: 'button',
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
  type,
  variant,
  ...customProps
  }) => {
  const attributes = Object.assign({}, customProps);
  const buttonText = text ? <span className={styles.text}>{text}</span> : null;

  attributes.className = cx([
    'button',
    variant,
    { 'is-disabled': isDisabled },
    size,
    { block: isBlock },
    { compact: isCompact },
    attributes.className,
  ]);

  attributes.type = type;
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
