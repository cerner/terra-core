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
   * Error message for when the input is invalid.
   */
  error: PropTypes.node,

  /**
   *  Help element to display with the input.
   */
  help: PropTypes.node,

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
   * Function to trigger when the user changes the select value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * Name of the select field.
   */
  name: PropTypes.string,

  /**
   * Custom attributes to apply to the select.
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
  labelAttrs: {},
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
  labelAttrs,
  onChange,
  name,
  required,
  selectAttrs,
  defaultValue,
  ...customProps
}) => (
  <Field
    {...customProps}
    error={error}
    help={help}
    isInline={isInline}
    label={label}
    labelAttrs={labelAttrs}
    required={required}
  >
    <Select
      {...selectAttrs}
      choices={choices}
      onChange={onChange}
      name={name}
      required={required}
      defaultValue={defaultValue}
    />
  </Field>
);


SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
