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
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
  /**
   * Determines whether the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input.
   */
  label: PropTypes.node,
  /**
   * Attributes to attach to the label.
   */
  labelAttrs: PropTypes.object,
  /**
   * Determines whether the field is required.
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
  labelAttrs: {},
  required: false,
};

const Field = ({ children, error, help, htmlFor, isInline, label, labelAttrs, required, ...customProps }) => {
  const fieldClasses = cx([
    'field',
    { 'field-inline': isInline },
    { 'field-required': required },
    customProps.className,
  ]);

  const labelClassNames = cx([
    'label',
    labelAttrs.className,
  ]);

  return (
    <div {...customProps} className={fieldClasses}>
      {label && <label htmlFor={htmlFor} {...labelAttrs} className={labelClassNames}>{label}</label>}
      {children}
      {help && <small className={cx('help-text')} tabIndex="-1">{help}</small>}
      {error && <small className={cx('error')} tabIndex="-1">{error}</small>}
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
