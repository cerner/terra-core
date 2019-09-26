import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Field from 'terra-form-field';
import Select from './Select';
import Variants from './shared/_variants';
import styles from './shared/_Frame.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection.
   * This is not applicable to the `multiple` or `tag` variants since the selection can already be deselected using the tag.
   */
  allowClear: PropTypes.bool,
  /**
   * The select options.
   */
  children: PropTypes.node,
  /**
   * The field label.
   */
  label: PropTypes.node.isRequired,
  /**
   * The default value of the select. Can be a string, number, or array of strings/numbers.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
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
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether the field is incomplete.
   */
  isIncomplete: PropTypes.bool,
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
   * The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
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
   * The value of the select. Can be a string, number, or array of strings/numbers.
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
  allowClear: false,
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  error: undefined,
  help: undefined,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxSelectionCount: undefined,
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
  allowClear,
  children,
  defaultValue,
  disabled,
  error,
  help,
  hideRequired,
  intl,
  isIncomplete,
  isInline,
  isInvalid,
  isLabelHidden,
  label,
  labelAttrs,
  maxSelectionCount,
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
}) => {
  let helpText = help;
  if (maxSelectionCount !== undefined && maxSelectionCount >= 2) {
    const limitSelectionText = intl.formatMessage({ id: 'Terra.form.select.maxSelectionHelp' }, { text: maxSelectionCount });

    if (help) {
      helpText = (
        <span>
          {limitSelectionText}
          {' '}
          {help}
        </span>
      );
    } else {
      helpText = limitSelectionText;
    }
  }

  let ariaDescriptionIds;

  if (help && error && isInvalid) {
    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${selectId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${selectId}-error`;
    }
  }

  const classes = cx([
    { 'is-incomplete': isIncomplete && required },
  ]);

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={helpText}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={selectId}
      maxWidth={maxWidth}
    >
      <Select
        {...selectAttrs}
        ariaLabel={label}
        allowClear={allowClear}
        aria-describedby={ariaDescriptionIds}
        className={classes}
        disabled={selectAttrs.disabled || disabled}
        id={selectId}
        isInvalid={isInvalid}
        defaultValue={defaultValue}
        maxSelectionCount={maxSelectionCount !== undefined && maxSelectionCount < 2 ? undefined : maxSelectionCount}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
        variant={variant}
      >
        {children}
      </Select>
    </Field>
  );
};

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;
SelectField.Option = Select.Option;
SelectField.OptGroup = Select.OptGroup;

export default injectIntl(SelectField);
