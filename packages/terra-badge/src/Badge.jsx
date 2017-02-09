import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../src/terra-badge.scss';

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

Badge.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  isReversed: PropTypes.bool,
  icon: PropTypes.element,
  children: PropTypes.node,
};

Badge.defaultProps = {
  size: 'small',
  intent: 'default',
  isReversed: false,
};

export default Badge;
