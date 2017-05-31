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
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
  /**
   * Determines whether the field is an inline field
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
  htmlFor: undefined,
  isInline: false,
  label: null,
  required: false,
};

const Field = ({ children, error, help, htmlFor, isInline, label, required, ...customProps }) => {
  const fieldClasses = classNames(
    'terra-Form-field',
    { 'terra-Form-field--inline': isInline },
    { 'terra-Form-field--required': required },
    customProps.className,
  );

  return (
    <div {...customProps} className={fieldClasses}>
      {label && <label className="terra-Form-label" htmlFor={htmlFor}>{label}</label>}
      {children}
      {help && <small className="terra-Form-helpText" tabIndex="-1">{help}</small>}
      {error && <small className="terra-Form-error" tabIndex="-1">{error}</small>}
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
