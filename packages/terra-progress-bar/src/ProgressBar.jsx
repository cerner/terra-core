import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/progress-bar.scss';

const propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

const defaultProps = {
  color: '#007cc3', // Default color of the ProgressBar fill
  height: 'small',
  max: 100,
  value: 0,
};

const ProgressBar = ({
  height,
  value,
  max,
  ...customProps
}) => {
  const classes = classNames([
    'terra-ProgressBar',
    { [`terra-ProgressBar--${height}`]: height },
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
