import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Badge.scss';

const propTypes = {
  /**
   * Child Nodes.
   */
  children: PropTypes.node,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: PropTypes.element,
  /**
   * Sets the badge color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.
   */
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the badge size. One of tiny, small, medium, large, huge.
   * @type String
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the badge text.
   */
  text: PropTypes.string,
};

const defaultProps = {
  children: null,
  icon: null,
  intent: 'default',
  isReversed: false,
  size: 'small',
  text: null,
};

const Badge = ({
  size,
  intent,
  isReversed,
  text,
  icon,
  ...additionalProps
}) => {
  const classes = classNames([
    'terra-Badge',
    { [`terra-Badge--${size}`]: size },
    { [`terra-Badge--${intent}`]: intent },
    additionalProps.className,
  ]);

  const textContent = text ? <span className="terra-Badge-text">{text}</span> : null;

  const content = isReversed ? [textContent, icon, additionalProps.children] : [icon, textContent, additionalProps.children];

  return React.createElement('span', { ...additionalProps, className: classes }, ...content);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
