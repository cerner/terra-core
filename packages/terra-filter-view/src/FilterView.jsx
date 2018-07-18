import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import { Variants } from './_constants';
import Select from './Select';

const propTypes = {
  /**
   * The dropdown/result menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * When true, will disable the auto-search.
   */
  disableAutoSearch: PropTypes.bool,
  /**
   * Additional attributes to spread onto the dropdown. ( style, classnames, etc.. )
   */
  dropdownAttrs: PropTypes.shape({}),
  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func,
  /**
   * A callback to indicate an invalid search.
   */
  onInvalidSearch: PropTypes.func,
  /**
   * Callback function triggered when the search criteria changes. function(searchvalue)
   */
  onSearch: PropTypes.func,
  /**
   * Callback function invoked for each option on search change. function(searchvalue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Controls whether or not all results are shown on initial load or after input focus.
   */
  showResultsInitially: PropTypes.bool,
  /**
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,
  /**
   * The search field variant. One of `dropdown` or `persistent`
   */
  variant: PropTypes.oneOf([
    Variants.DROPDOWN,
    Variants.LIST,
  ]),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  disableAutoSearch: false,
  dropdownAttrs: undefined,
  minimumSearchTextLength: 2,
  noResultContent: undefined,
  onChange: undefined,
  onInvalidSearch: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  searchDelay: 250,
  showResultsInitially: true,
  variant: Variants.DROPDOWN,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('please add locale prop to base component to load translations');
    }
  },
};

function FilterView(props) {
  const {
    children,
    defaultValue,
    onChange,
    onSelect,
    placeholder,
    variant,
    searchDelay,
    ...otherProps
  } = props;

  return (
    <Select
      id="search"
      defaultValue={defaultValue}
      onChange={onChange}
      onSelect={onSelect}
      placeholder={placeholder}
      searchDelay={searchDelay}
      variant={variant}
      {...otherProps}
    >
      {children}
    </Select>
  );
}


FilterView.propTypes = propTypes;
FilterView.defaultProps = defaultProps;
FilterView.contextTypes = contextTypes;
FilterView.Option = Select.Option;
FilterView.OptGroup = Select.OptGroup;

export default FilterView;
