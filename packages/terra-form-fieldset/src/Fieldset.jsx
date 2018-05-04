/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import 'terra-base/lib/baseStyles';
import styles from './Fieldset.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Children the Field contains.
   */
  children: PropTypes.node,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * Help element to display with other elements.
   */
  help: PropTypes.node,
  /**
   * Legend for the input group.
   */
  legend: PropTypes.string,
  /**
   * Attributes to attach to the legend.
   */
  legendAttrs: PropTypes.object,
  /**
   * Determines whether the fieldset is required.
   */
  required: PropTypes.bool,
};

const defaultProps = {
  legendAttrs: {},
  error: null,
  required: false,
};

const Fieldset = ({ children, error, help, legend, legendAttrs, required, ...customProps }) => {
  const fieldsetClasses = cx([
    'fieldset',
    { 'fieldset-required': required },
    customProps.className,
  ]);

  const legendClasses = cx([
    'legend',
    legendAttrs.className,
  ]);

  return (
    <fieldset {...customProps} className={fieldsetClasses}>
      {legend && <legend {...legendAttrs} className={legendClasses}>{legend}</legend>}
      {help && <small className={cx('help-text')} tabIndex="-1">{help}</small>}
      {error && <div className={cx('error-text')}>{error}</div>}
      <div className={cx('fieldset-children')}>
        {children}
      </div>
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
