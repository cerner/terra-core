import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

const BadgeIntent = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  WARNING: 'warning',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
};

const BadgeSize = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

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
   * Sets the badge color scheme. One of `default`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.
   */
  intent: PropTypes.oneOf(BadgeIntent),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the badge size. One of `tiny`, `small`, `medium`, `large`, `huge`.
   */
  size: PropTypes.oneOf(BadgeSize),
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
  ...customProps
}) => {
  const badgeClassNames = cx(
    'badge',
    size,
    intent,
    customProps.className,
  );

  const textContent = text ? <span className={styles.text}>{text}</span> : null;
  const content = isReversed ? [textContent, icon, customProps.children] : [icon, textContent, customProps.children];
  return React.createElement('span', { ...customProps, className: badgeClassNames }, ...content);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
export { BadgeIntent, BadgeSize };
