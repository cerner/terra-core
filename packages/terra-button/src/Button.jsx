import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/button.scss';

const propTypes = {
  isBlock: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.element,
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isReversed: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  text: PropTypes.string,
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
