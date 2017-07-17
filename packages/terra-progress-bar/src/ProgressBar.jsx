import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ProgressBar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The color of the progress bar. Accepts a CSS color value.
   */
  color: PropTypes.string,
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
};

const defaultProps = {
  heightSize: 'small',
  max: 100,
  value: 0,
};

const ProgressBar = ({
  heightSize,
  value,
  max,
  ...customProps
}) => {
  const classes = cx([
    'progress-bar',
    heightSize,
    customProps.className,
  ]);

  const normalizedValue = (value / max) * 100;

  return (
    <progress
      {...customProps}
      style={{ color: customProps.color }}
      className={classes}
      max={100}
      value={normalizedValue}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      tabIndex="-1"
    />);
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
