import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/terra-button.scss';

const Button = (props) => {
  const attributes = Object.assign({}, props.attributes);
  const text = props.text ? <span className="terra-Button-text">{props.text}</span> : null;

  let style = props.intent;
  const titleize = s => s.charAt(0).toUpperCase() + s.slice(1);
  if (props.variant) {
    style = `${props.variant}${titleize(props.intent)}`;
  }

  attributes.className = classNames([
    'terra-Button',
    `terra-Button--${style}`,
    { 'is-disabled': props.isDisabled },
    { [`terra-Button--${props.size}`]: props.size },
    { 'terra-Button--block': props.isBlock },
    attributes.className,
  ]);

  attributes.disabled = props.isDisabled;
  attributes.href = props.href;
  attributes.onClick = props.onClick;
  attributes.tabIndex = props.isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = props.isDisabled;

  const order = props.isReversed ?
    [text, props.icon, props.children] :
    [props.icon, text, props.children];

  return React.createElement(props.href ? 'a' : 'button', attributes, ...order);
};

Button.propTypes = {
  attributes: PropTypes.oneOfType([PropTypes.object]),
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

Button.defaultProps = {
  isBlock: false,
  intent: 'default',
  isDisabled: false,
  isReversed: false,
};

export default Button;
