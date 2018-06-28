import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { Variants } from './_constants';

const propTypes = {
  /**
   * the dropdown/result menu options.
   */
  children: PropTypes.node,
  /**
   * the default selected value.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * when true, will disable the auto-search.
   */
  disableAutoSearch: PropTypes.bool,
  /**
   * additional attributes to spread onto the dropdown. ( style, classnames, etc.. )
   */
  dropdownAttrs: PropTypes.object,
  /**
   * whether or not the field should display as a block.
   */
  isBlock: PropTypes.bool,
  /**
   * the minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,
  /**
   * content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func,
  /**
   * callback function triggered when the search criteria changes. function(searchvalue)
   */
  onSearch: PropTypes.func,
  /**
   * callback function invoked for each option on search change. function(searchvalue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * how long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,
  /**
   * The search field variant. One of `dropdown` or `persistent`
   */
  variant: PropTypes.oneOf([
    Variants.DROPDOWN,
    Variants.PERSISTENT,
  ]),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isBlock: false,
  minimumSearchTextLength: 2,
  noResultContent: undefined,
  onChange: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  searchDelay: 250,
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


function SearchFieldFilterView(props) {
  const {
    children,
    defaultValue,
    disableAutoSearch,
    isBlock,
    minimumSearchTextLength,
    onChange,
    onSelect,
    placeholder,
    variant,
    searchDelay,
    ...otherProps } = props;
  return (
    <Select
      id="search"
      defaultValue={defaultValue}
      onChange={onChange}
      onSelect={onSelect}
      placeholder={placeholder}
      variant={variant}
      {...otherProps}
    >
      {children}
    </Select>
  );
}


SearchFieldFilterView.propTypes = propTypes;
SearchFieldFilterView.defaultProps = defaultProps;
SearchFieldFilterView.contextTypes = contextTypes;
SearchFieldFilterView.Option = Select.Option;
SearchFieldFilterView.OptGroup = Select.OptGroup;

export default SearchFieldFilterView;
