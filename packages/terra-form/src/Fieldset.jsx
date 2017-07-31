/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import 'terra-base/lib/baseStyles';
import styles from './Field.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Children the Field contains.
   */
  children: PropTypes.node,
  /**
   * Error message for when the input is invalid.
   */
  error: PropTypes.node,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Determines whether the fieldset is an inline fieldset.
   */
  isInline: PropTypes.bool,
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
  children: null,
  error: null,
  help: null,
  isInline: false,
  legend: null,
  legendAttrs: {},
  required: false,
};

const Fieldset = ({ children, error, help, isInline, legend, legendAttrs, required, ...customProps }) => {
  const fieldsetClasses = cx([
    'fieldset',
    { 'fieldset-inline': isInline },
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
      {error && <small className={cx('error')} tabIndex="-1">{error}</small>}
      <div className={cx('fieldset-children')}>
        {children}
      </div>
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
