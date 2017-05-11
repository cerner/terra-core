// eslint-disable react/jsx-boolean-value

import React, { PropTypes } from 'react';

import Field from './Field';
import Textarea from './Textarea';

const propTypes = {
  /**
   * Custom attributes to apply to the input
   */
  attrs: PropTypes.object,
  /**
   * How many columns the textarea should have
   */
  cols: PropTypes.number,
  /**
   * The defaultValue of the textarea element
   */
  defaultValue: PropTypes.string,
  /**
   * Error message for when the input is invalid
   */
  error: PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input
   */
  label: PropTypes.node,
  /**
   * Maximum number of characters user can input in this field
   */
  maxLength: PropTypes.number,
  /**
   * Minimum number of characters user must input in this field
   */
  minLength: PropTypes.number,
  /**
   * Name of the input attribute
   */
  name: PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required
   */
  required: PropTypes.bool,
  /**
   * How many rows the textarea should have
   */
  rows: PropTypes.number,
  /**
   * The value of the textarea element
   */
  value: PropTypes.string,
};

const defaultProps = {
  attrs: {},
  cols: null,
  defaultValue: undefined,
  error: null,
  help: null,
  isInline: false,
  label: null,
  maxLength: null,
  minLength: null,
  name: null,
  onChange: () => {},
  required: false,
  rows: null,
  value: undefined,
};

const TextareaField = ({
  attrs,
  cols,
  defaultValue,
  error,
  help,
  isInline,
  label,
  name,
  onChange,
  required,
  rows,
  maxLength,
  minLength,
  value,
  ...customProps
}) => (
  <Field
    label={label}
    error={error}
    help={help}
    isInline={isInline}
    {...customProps}
  >
    <Textarea
      cols={cols}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      required={required}
      rows={rows}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...attrs}
    />
  </Field>
);

TextareaField.propTypes = propTypes;
TextareaField.defaultProps = defaultProps;

export default TextareaField;
