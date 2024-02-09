import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './ProgressBar.module.scss';

const cx = classNamesBind.bind(styles);

const ProgressBarHeightSize = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const propTypes = {
  /**
   * Sets the size of the progress-bar from the following values; `tiny`, `small`, `medium`, `large` and `huge`
   */
  heightSize: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the fill-value of the progress bar with respect to the `max` prop.
   */
  value: PropTypes.number.isRequired,
  /**
   * Sets the maximum possible fill-value.
   */
  max: PropTypes.number,
  /**
   * Value passed to aria-valuetext for accessibility. You can view more about this attribute
   * at https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext.
   * 
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/blue?icon=github)
   * aria-valuetext attribute defines a text alternative of aria-valuenow attribute for a Progress Bar Component, that can be easily perceived by all AT users.
   */
  valueText: PropTypes.string,
  /**
   * Sets an author defined class, to control the colors of the progress bar and override the base color styles.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/blue?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  colorClass: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  heightSize: 'small',
  max: 100,
  valueText: undefined,
  colorClass: 'default-color',
};

const ProgressBar = ({
  heightSize,
  value,
  max,
  valueText,
  colorClass,
  intl,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const classes = classNames(
    cx(
      'progress-bar',
      heightSize,
      colorClass,
      theme.className,
    ),
    customProps.className,
  );

  const normalizedValue = (value / max) * 100;

  const valText = valueText || intl.formatMessage({ id: 'Terra.progress.bar.percentage' }, { value: normalizedValue });

  return (
    <div>
      <VisuallyHiddenText aria-live="polite" text={valText} />
      <progress
        {...customProps}
        className={classes}
        max={100}
        value={normalizedValue}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={normalizedValue}
        aria-valuetext={valText}
        tabIndex="-1"
      />
    </div>
  );
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

export default injectIntl(ProgressBar);
export { ProgressBarHeightSize };
