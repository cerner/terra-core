import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Input from 'terra-form/lib/Input';
import './SearchField.scss';

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
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: PropTypes.func,
};

const defaultProps = {
  placeholder: '',
  minimumSearchTextLength: 2,
  searchDelay: 250,
};

class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

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

    if (!this.searchTimeout) {
      this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
    }
  }

  handleSearch() {
    this.clearSearchTimeout();

    if (this.state.searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
      this.props.onSearch(this.state.searchText);
    }
  }

  clearSearchTimeout() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
  }

  render() {
    const { placeholder, ...customProps } = this.props;
    const searchFieldClassNames = classNames([
      'terra-SearchField',
      customProps.className,
    ]);

    delete customProps.onSearch;
    delete customProps.minimumSearchTextLength;
    delete customProps.searchDelay;

    return (
      <div {...customProps} className={searchFieldClassNames}>
        <Input
          className="terra-SearchField-input"
          type="search"
          placeholder={placeholder}
          value={this.state.searchText}
          onChange={this.handleTextChange}
        />
        <Button
          className="terra-SearchField-button"
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
