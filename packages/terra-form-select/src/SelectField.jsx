import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Select from './Select';
import { Variants } from './_constants';

const propTypes = {
  /**
   * The select options.
   */
  children: PropTypes.node,
  /**
   * The field label.
   */
  label: PropTypes.node.isRequired,
  /**
   * The default value of the select.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
  /**
   * Error message displayed when the select is invalid.
   */
  error: PropTypes.node,
  /**
   * Help message to display with the select.
   */
  help: PropTypes.node,
  /**
   * Whether to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Whether the field is displayed inline. Displays block by default.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Additional attributes to spread onto the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Additional attributes to spread onto the select.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectAttrs: PropTypes.object,
  /**
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  selectId: PropTypes.string.isRequired,
  /**
   * Whether to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * The value of the select.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
  /**
   * The select variant. One of `default`, `combobox`, `multiple`, `tag`, or `search`.
   */
  variant: PropTypes.oneOf([
    Variants.COMBOBOX,
    Variants.DEFAULT,
    Variants.MULTIPLE,
    Variants.SEARCH,
    Variants.TAG,
  ]),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  error: undefined,
  help: undefined,
  hideRequired: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  selectAttrs: {},
  showOptional: false,
  value: undefined,
  variant: 'default',
};

const SelectField = ({
  children,
  defaultValue,
  error,
  help,
  hideRequired,
  isInline,
  isInvalid,
  isLabelHidden,
  label,
  labelAttrs,
  maxWidth,
  onChange,
  placeholder,
  required,
  selectAttrs,
  selectId,
  showOptional,
  value,
  variant,
  ...customProps
}) => (
  <Field
    label={label}
    labelAttrs={labelAttrs}
    error={error}
    help={help}
    hideRequired={hideRequired}
    required={required}
    showOptional={showOptional}
    isInvalid={isInvalid}
    isInline={isInline}
    isLabelHidden={isLabelHidden}
    htmlFor={selectId}
    maxWidth={maxWidth}
    {...customProps}
  >
    <Select
      {...selectAttrs}
      id={selectId}
      isInvalid={isInvalid}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      variant={variant}
    >
      {children}
    </Select>
  </Field>
);

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

SelectField.Option = Select.Option;
SelectField.OptGroup = Select.OptGroup;

export default SelectField;
