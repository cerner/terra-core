import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Input from 'terra-form/lib/Input';
import styles from './SearchField.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * When true, will disable the auto-search
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
   * Placeholder text to show while the search field is empty.
   */
  placeholder: PropTypes.string,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,

  /**
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: PropTypes.func,

  /**
   * A callback to indicate an invalid search. Sends parameter {String} searchText.
   */
  onInvalidSearch: PropTypes.func,
};

const defaultProps = {
  disableAutoSearch: false,
  isBlock: false,
  isDisabled: false,
  placeholder: '',
  minimumSearchTextLength: 2,
  searchDelay: 250,
};

class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.searchTimeout = null;
    this.state = {
      searchText: '',
    };
  }

  componentWillUnmount() {
    this.clearSearchTimeout();
  }

  handleTextChange(event) {
    this.setState({ searchText: event.target.value });

    if (!this.searchTimeout && !this.props.disableAutoSearch) {
      this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
    }
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.handleSearch();
    }
  }

  handleSearch() {
    this.clearSearchTimeout();

    if (this.state.searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
      this.props.onSearch(this.state.searchText);
    } else if (this.props.onInvalidSearch) {
      this.props.onInvalidSearch(this.state.searchText);
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
      isBlock,
      isDisabled,
      disableAutoSearch,
      placeholder,
      minimumSearchTextLength,
      searchDelay,
      onSearch,
      onInvalidSearch,
      ...customProps
    } = this.props;
    const searchFieldClassNames = cx([
      'searchfield',
      { block: isBlock },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={searchFieldClassNames}>
        <Input
          className={cx('input')}
          type="search"
          placeholder={placeholder}
          value={this.state.searchText}
          onChange={this.handleTextChange}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          onKeyDown={this.handleKeyDown}
        />
        <Button
          className={cx('button')}
          onClick={this.handleSearch}
          isCompact
          isDisabled={isDisabled}
        >
          <IconSearch />
        </Button>
      </div>
    );
  }

}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

export default SearchField;
