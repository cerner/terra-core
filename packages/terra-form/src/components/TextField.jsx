// eslint-disable react/jsx-boolean-value

import React, { PropTypes } from 'react';

import Field from './Field';
import Input from './Input';

const propTypes = {
  /**
   * Custom attributes to apply to the input
   */
  attrs: PropTypes.object,
  /**
   * Initial Value of the input
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
   * Type the input will be
   */
  type: PropTypes.string,
  /**
   * Initial Value of the input
   */
  value: PropTypes.string,
};

const defaultProps = {
  attrs: {},
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
  type: 'text',
  value: undefined,
};

const TextField = ({
  attrs,
  defaultValue,
  error,
  help,
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
      {...attrs}
    />
  </Field>
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
