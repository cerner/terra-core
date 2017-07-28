import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Input from './Input';

const propTypes = {
  /**
   * The defaultValue of the input element. Use this to create an uncontrolled input.
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
   * The input type.
   */
  type: PropTypes.string,
  /**
   * The value of the input element. Use this to create a controlled input.
   */
  value: PropTypes.string,
};

const defaultProps = {
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
  type: 'text',
  value: undefined,
};

const TextField = ({
  defaultValue,
  error,
  help,
  inputAttrs,
  inputId,
  isInline,
  label,
  maxLength,
  minLength,
  name,
  onChange,
  required,
  type,
  value,
  ...customProps
}) => (
  <Field
    label={label}
    error={error}
    help={help}
    isInline={isInline}
    htmlFor={inputId}
    required={required}
    {...customProps}
  >
    <Input
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      id={inputId}
      required={required}
      value={value}
      defaultValue={defaultValue}
      type={type}
      onChange={onChange}
      {...inputAttrs}
    />
  </Field>
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
