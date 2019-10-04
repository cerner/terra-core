import React from 'react';
import PropTypes from 'prop-types';
import Variants from './shared/_variants';
import Option from './shared/_Option';
import OptGroup from './shared/_OptGroup';
import Combobox from './Combobox';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import Search from './SearchSelect';
import Tag from './TagSelect';

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection, will use placeholder text if provided.
   * This is not applicable to the `multiple` or `tag` variants since the selection can already be deselected using the tag.
   */
  allowClear: PropTypes.bool,
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value. Can be a string, number, or array of strings/numbers.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: PropTypes.object,
  /**
   * Whether the select is incomplete. Select must also be required.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * Ensure accessibility on touch devices. Will render the dropdown menu in
   * normal DOM flow with position absolute. By default, the menu renders in a
   * portal, which is inaccessible on touch devices. Only applicable to variants
   * that include an input (e.g. `combobox`, `multiple`, `search`, and `tag`).
   */
  isTouchAccessible: PropTypes.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
  /**
   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when the select loses focus. function(event)
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when the select is clicked. function(event)
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when an option is deselected. function(value)
   */
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when the select receives focus. function(event)
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when the search criteria changes. function(searchValue)
   */
  onSearch: PropTypes.func,
  /**
   * Callback function triggered when an option is selected. function(value)
   */
  onSelect: PropTypes.func,
  /**
   * Callback function invoked for each option on search change. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The selected value. Can be a string, number, or array of strings/numbers.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * The behavior of the select. One of `default`, `combobox`, `multiple`, `tag`, or `search`.
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
  dropdownAttrs: undefined,
  isIncomplete: false,
  isInvalid: false,
  isTouchAccessible: false,
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  value: undefined,
  variant: 'default',
};

function Select(props) {
  const { variant, ...otherProps } = props;

  switch (variant) {
    case Variants.COMBOBOX: {
      const { maxSelectionCount, ...comboboxProps } = otherProps;
      return <Combobox {...comboboxProps} />;
    }
    case Variants.MULTIPLE: {
      const { allowClear, ...multipleProps } = otherProps;
      return <MultiSelect {...multipleProps} />;
    }
    case Variants.SEARCH: {
      const { maxSelectionCount, ...searchProps } = otherProps;
      return <Search {...searchProps} />;
    }
    case Variants.TAG: {
      const { noResultContent, allowClear, ...tagProps } = otherProps;
      return <Tag {...tagProps} />;
    }
    case Variants.DEFAULT:
    default: {
      const {
        isTouchAccessible,
        maxSelectionCount,
        onSearch,
        optionFilter,
        ...singleSelectProps
      } = otherProps;
      return <SingleSelect {...singleSelectProps} />;
    }
  }
}

Select.Option = Option;
Select.OptGroup = OptGroup;
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.isSelect = true;

export default Select;
