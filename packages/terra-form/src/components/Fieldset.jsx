/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React, { PropTypes } from 'react';
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
   * The value for the htmlFor property on the label
   */
  htmlFor: PropTypes.string,
  /**
   * Determines whether the field in an inline field
   */
  isInline: PropTypes.bool,
  /**
   * Legend for the input group
   */
  legend: PropTypes.string,
};

const defaultProps = {
  children: null,
  error: null,
  help: null,
  htmlFor: null,
  isInline: false,
  legend: null,
};

const Fieldset = ({ children, error, help, htmlFor, isInline, legend, ...customProps }) => {
  const fieldsetClasses = classNames(
    'terra-Form-field',
    { 'terra-Form-field--inline': isInline },
    customProps.className,
  );

  return (
    <fieldset {...customProps} className={fieldsetClasses}>
      {legend && <legend className="terra-Form-legend">{legend}</legend>}
      {children}
      {help && <small className="terra-Form-helpText">{help}</small>}
      {error && <small className="terra-Form-error" tabIndex="-1">{error}</small>}
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
