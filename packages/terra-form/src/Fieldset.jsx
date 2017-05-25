/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Field.scss';

const propTypes = {
  /**
   * Children the Field contains
   */
  children: PropTypes.node,
  /**
   * Error message for when the input is invalid
   */
  error: PropTypes.node,
  /**
   * Help element to display with the input
   */
  help: PropTypes.node,
  /**
   * Determines whether the fieldset is an inline fieldset
   */
  isInline: PropTypes.bool,
  /**
   * Legend for the input group
   */
  legend: PropTypes.string,
  /**
   * Determines whether the fieldset is required
   */
  required: PropTypes.bool,
};

const defaultProps = {
  children: null,
  error: null,
  help: null,
  isInline: false,
  legend: null,
  required: false,
};

const Fieldset = ({ children, error, help, isInline, legend, required, ...customProps }) => {
  const fieldsetClasses = classNames(
    'terra-Form-fieldset',
    { 'terra-Form-fieldset--inline': isInline },
    { 'terra-Form-fieldset--required': required },
    customProps.className,
  );

  return (
    <fieldset {...customProps} className={fieldsetClasses}>
      {legend && <legend className="terra-Form-legend">{legend}</legend>}
      {children}
      {help && <small className="terra-Form-helpText" tabIndex="-1">{help}</small>}
      {error && <small className="terra-Form-error" tabIndex="-1">{error}</small>}
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
