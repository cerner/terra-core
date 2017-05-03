/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
};

const defaultProps = {
  children: null,
  error: null,
  help: null,
  isInline: false,
  label: null,
};

const Field = ({ children, error, help, isInline, label, ...customProps }) => {
  const fieldClasses = classNames(
    'terra-Form-field',
    { 'terra-Form-field--inline': isInline },
    customProps.className,
  );

  return (
    <p {...customProps} className={fieldClasses}>
      {label && <label className="terra-Form-label">{label}</label>}
      {children}
      {help && <small className="terra-Form-helpText">{help}</small>}
      {error && <small className="terra-Form-error" tabIndex="-1">{error}</small>}
    </p>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
