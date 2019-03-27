import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: PropTypes.bool,
  /**
   * Sets the badge size. One of `tiny`, `small`, `medium`, `large`, `huge`.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the badge text.
   */
  text: PropTypes.string,
  /**
   * Text that describes the badge to a screen reader. Use this
   * for creating an accessible badge.
   */
  visuallyHiddenText: PropTypes.string,
};

const defaultProps = {
  children: null,
  icon: null,
  intent: 'default',
  isReversed: false,
  size: 'small',
  text: null,
  visuallyHiddenText: undefined,
};

const Badge = ({
  size,
  intent,
  isReversed,
  text,
  icon,
  visuallyHiddenText,
  ...customProps
}) => {
  const badgeClassNames = cx(
    'badge',
    { 'has-icon': icon },
    { 'is-reversed': isReversed },
    size,
    intent,
    customProps.className,
  );

  const textContent = text ? <span className={styles.text} aria-hidden="true">{text}</span> : null;
  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;
  const content = isReversed ? [visuallyHiddenTextContent, textContent, icon, customProps.children] : [icon, visuallyHiddenTextContent, textContent, customProps.children];
  return React.createElement('span', { ...customProps, className: badgeClassNames }, ...content);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
export { BadgeIntent, BadgeSize };
