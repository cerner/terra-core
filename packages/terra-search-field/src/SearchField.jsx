import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Input from 'terra-form-input';
import styles from './SearchField.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconSearch />;

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * The defaultValue of the search field. Use this to create an uncontrolled search field.
   */
  defaultValue: PropTypes.string,

  /**
   * When true, will disable the auto-search.
   */
  disableAutoSearch: PropTypes.bool,

  /**
   * Whether or not the field should display as a block.
   */
  isBlock: PropTypes.bool,

  /**
   * When true, will disable the field.
   */
  isDisabled: PropTypes.bool,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,

  /**
   * Placeholder text to show while the search field is empty.
   */
  placeholder: PropTypes.string,

  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * A callback to indicate an invalid search. Sends parameter {String} searchText.
   */
  onInvalidSearch: PropTypes.func,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: PropTypes.func,

  /**
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,

  /**
   * The value of search field.  Use this to create a controlled search field.
   */
  value: PropTypes.string,

  /**
   * Callback ref to pass into the inner input component.
   */
  inputFieldRefCallback: PropTypes.func,
};

const defaultProps = {
  defaultValue: undefined,
  disableAutoSearch: false,
  isBlock: false,
  isDisabled: false,
  minimumSearchTextLength: 2,
  placeholder: '',
  searchDelay: 250,
  value: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateSearchText = this.updateSearchText.bind(this);

    this.searchTimeout = null;
    this.state = { searchText: this.props.defaultValue };
  }

  componentDidUpdate() {
    // if consumer updates the value prop with onChange, need to update state to match
    this.updateSearchText(this.props.value);
  }

  componentWillUnmount() {
    this.clearSearchTimeout();
  }

  handleTextChange(event) {
    const textValue = event.target.value;
    this.updateSearchText(textValue);

    if (this.props.onChange) {
      this.props.onChange(event, textValue);
    }

    if (!this.searchTimeout && !this.props.disableAutoSearch) {
      this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
    }
  }

  updateSearchText(searchText) {
    if (searchText !== undefined && searchText !== this.state.searchText) {
      this.setState({ searchText });
    }
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.handleSearch();
    }
  }

  handleSearch() {
    this.clearSearchTimeout();

    const searchText = this.state.searchText || '';

    if (searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
      this.props.onSearch(searchText);
    } else if (this.props.onInvalidSearch) {
      this.props.onInvalidSearch(searchText);
    }
  }

  clearSearchTimeout() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
  }

  render() {
    const {
      defaultValue,
      disableAutoSearch,
      isBlock,
      isDisabled,
      minimumSearchTextLength,
      placeholder,
      searchDelay,
      onChange,
      onInvalidSearch,
      onSearch,
      value,
      inputFieldRefCallback,
      ...customProps
    } = this.props;
    const searchFieldClassNames = cx([
      'searchfield',
      { block: isBlock },
      customProps.className,
    ]);

    const additionalInputAttributes = {};
    if (value !== undefined) {
      additionalInputAttributes.value = value;
    } else {
      additionalInputAttributes.defaultValue = defaultValue;
    }

    const buttonText = this.context.intl.formatMessage({ id: 'Terra.searchField.search' });

    return (
      <div {...customProps} className={searchFieldClassNames}>
        <Input
          className={cx('input')}
          type="search"
          placeholder={placeholder}
          onChange={this.handleTextChange}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          onKeyDown={this.handleKeyDown}
          refCallback={inputFieldRefCallback}
          {...additionalInputAttributes}
        />
        <Button
          className={cx('button')}
          text={buttonText}
          onClick={this.handleSearch}
          isDisabled={isDisabled}
          icon={Icon}
          isIconOnly
          isCompact
        />
      </div>
    );
  }
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;
SearchField.contextTypes = contextTypes;

export default SearchField;
