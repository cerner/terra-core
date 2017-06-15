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
   * Error message for when the input is invalid
   */
  error: PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: PropTypes.node,
  /**
   * Custom attributes to apply to the input
   */
  inputAttrs: PropTypes.object,
  /**
   * Whether the field is inline
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input
   */
  label: PropTypes.node,
  /**
   * Attributes to attach to the label
   */
  labelAttrs: PropTypes.object,
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
   * Function to trigger when the user changes the input value. Provide one to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Whether the input is required
   */
  required: PropTypes.bool,
  /**
   * Type the input will be
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
    required={required}
    {...customProps}
  >
    <Input
      maxLength={maxLength}
      minLength={minLength}
      name={name}
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
