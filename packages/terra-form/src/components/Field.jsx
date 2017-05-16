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
   * Determines whether the field in an inline field
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input
   */
  label: PropTypes.node,
  /**
   * Determines whether the field is required
   */
  required: PropTypes.bool,
};

const defaultProps = {
  children: null,
  error: null,
  help: null,
  isInline: false,
  label: null,
  required: false,
};

const Field = ({ children, error, help, isInline, label, required, ...customProps }) => {
  const fieldClasses = classNames(
    'terra-Form-field',
    { 'terra-Form-field--inline': isInline },
    { 'terra-Form-field--required': required },
    customProps.className,
  );

  return (
    <div {...customProps} className={fieldClasses}>
      {label && <label className="terra-Form-label">{label}</label>}
      {children}
      {help && <small className="terra-Form-helpText">{help}</small>}
      {error && <small className="terra-Form-error" tabIndex="-1">{error}</small>}
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
