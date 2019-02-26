import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ProgressBar.module.scss';

const cx = classNames.bind(styles);

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
   */
  valueText: PropTypes.string,
  /**
   * Sets an author defined class, to control the colors of the progress bar.
   * 
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/blue?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  colorClass: PropTypes.string,
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
  ...customProps
}) => {
  const classes = cx([
    'progress-bar',
    heightSize,
    colorClass,
    customProps.className,
  ]);

  const normalizedValue = (value / max) * 100;

  return (
    <progress
      {...customProps}
      className={classes}
      max={100}
      value={normalizedValue}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      aria-valuetext={valueText}
      tabIndex="-1"
    />
  );
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
export { ProgressBarHeightSize };
