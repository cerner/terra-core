import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Input from 'terra-form/lib/Input';
import styles from './SearchField.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: PropTypes.func,

  /**
   * A callback to indicate an invalid search. Sends parameter {String} searchText.
   */
  onInvalidSearch: PropTypes.func,

  /**
   * The text to display in the search field
   */
  value: PropTypes.string,
};

const defaultProps = {
  placeholder: '',
  minimumSearchTextLength: 2,
  searchDelay: 250,
  value: '',
};

class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.searchTimeout = null;
    this.state = {
      searchText: this.props.value,
    };
  }

  componentWillUnmount() {
    this.clearSearchTimeout();
  }

  handleTextChange(event) {
    const searchText = event.target.value;
    this.setState({ searchText });

    if (this.props.onChange) {
      this.props.onChange(event, searchText);
    }

    if (!this.searchTimeout) {
      this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
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
    const { placeholder, searchDelay, minimumSearchTextLength, onChange, onSearch, onInvalidSearch, ...customProps } = this.props;
    const searchFieldClassNames = cx([
      'searchfield',
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
        />
        <Button
          className={cx('button')}
          onClick={this.handleSearch}
          isCompact
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
