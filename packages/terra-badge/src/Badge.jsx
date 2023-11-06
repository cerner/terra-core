import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Badge.module.scss';

const cx = classNamesBind.bind(styles);

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
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Follow the accessibility guidance for color to ensure color is not the only method used to convey information.
   */
  intent: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * It is best practice to always use text. Use text that conveys the meaning or purpose of the badge.
   */
  text: PropTypes.string,
  /**
   * Additional text that can be visually hidden but supports people that use assistive technologies like screen readers.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Follow the Accessibility Guidance for visually hidden text above to better understand when to use this prop.
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
  intl,
  isReversed,
  text,
  icon,
  visuallyHiddenText,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const badgeClassNames = classNames(
    cx(
      'badge',
      { 'has-icon': icon },
      { 'is-reversed': isReversed },
      size,
      intent,
      theme.className,
    ),
    customProps.className,
  );

  const textContent = text ? <span className={styles.text}>{text}</span> : null;
  // const intentText = intent !== BadgeIntent.DEFAULT ? <VisuallyHiddenText text={intl.formatMessage({ id: `Terra.badge.intent.${intent}` })} /> : null;
  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;
  const content = isReversed ? [textContent, visuallyHiddenTextContent, icon, customProps.children] : [icon, textContent, visuallyHiddenTextContent, customProps.children];
  return React.createElement('span', { ...customProps, className: badgeClassNames }, ...content);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default injectIntl(Badge);
export { BadgeIntent, BadgeSize };
