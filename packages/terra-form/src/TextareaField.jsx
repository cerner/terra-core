import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Textarea from './Textarea';

const propTypes = {
  /**
   * How many columns the textarea should have.
   */
  cols: PropTypes.number,
  /**
   * The defaultValue of the textarea element. Use this to create an uncontrolled input.
   */
  defaultValue: PropTypes.string,
  /**
   * Error message for when the input is invalid.
   */
  error: PropTypes.node,
  /**
   *  Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Custom attributes to apply to the input.
   */
  inputAttrs: PropTypes.object,
  /**
   * Id of the input. Also populates the 'htmlFor' prop of the field.
   */
  inputId: PropTypes.string,
  /**
   * Whether the field is inline.
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
   * Maximum number of characters user can input in this field.
   */
  maxLength: PropTypes.number,
  /**
   * Minimum number of characters user must input in this field.
   */
  minLength: PropTypes.number,
  /**
   * Name of the input attribute.
   */
  name: PropTypes.string,
  /**
   * Function to trigger when the user changes the input value. Provide one to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required.
   */
  required: PropTypes.bool,
  /**
   * How many rows the textarea should have.
   */
  rows: PropTypes.number,
  /**
   * The value of the textarea element. Use this to create a controlled input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  cols: null,
  defaultValue: undefined,
  error: null,
  help: null,
  inputAttrs: {},
  inputId: undefined,
  isInline: false,
  label: null,
  labelAttrs: {},
  maxLength: null,
  minLength: null,
  name: null,
  onChange: undefined,
  required: false,
  rows: null,
  value: undefined,
};

const TextareaField = ({
  cols,
  defaultValue,
  error,
  help,
  inputAttrs,
  inputId,
  isInline,
  label,
  labelAttrs,
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
    htmlFor={inputId}
    isInline={isInline}
    required={required}
    {...customProps}
  >
    <Textarea
      cols={cols}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      id={inputId}
      required={required}
      rows={rows}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...inputAttrs}
    />
  </Field>
);

TextareaField.propTypes = propTypes;
TextareaField.defaultProps = defaultProps;

export default TextareaField;
