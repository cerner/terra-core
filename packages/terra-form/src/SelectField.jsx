import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Select from './Select';

const propTypes = {
  /**
   * List of choices to be selected.
   */
  choices: PropTypes.array.isRequired,

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
   * Function to trigger when the user changes the select value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * Name of the select field.
   */
  name: PropTypes.string,

  /**
   * Custom attributes to apply to the select
   */
  selectAttrs: PropTypes.object,

  /**
   * Whether the select is required or not.
   */
  required: PropTypes.bool,

  /**
   * The value to start the select on.
   */
  defaultValue: PropTypes.string,
};

const defaultProps = {
  error: null,
  help: null,
  isInline: false,
  label: null,
  onChange: undefined,
  name: null,
  required: false,
  selectAttrs: {},
  defaultValue: undefined,
};

const SelectField = ({
  choices,
  error,
  help,
  isInline,
  label,
  onChange,
  name,
  required,
  selectAttrs,
  defaultValue,
  ...customProps
}) => (
  <Field
    error={error}
    help={help}
    isInline={isInline}
    label={label}
    required={required}
    {...customProps}
  >
    <Select
      choices={choices}
      onChange={onChange}
      name={name}
      required={required}
      defaultValue={defaultValue}
      {...selectAttrs}
    />
  </Field>
);


SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
