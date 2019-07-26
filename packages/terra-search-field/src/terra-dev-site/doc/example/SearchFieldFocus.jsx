import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';
import Button from 'terra-button';

class SearchFieldFocus extends React.Component {
  constructor(props) {
    super(props);
    this.invalidSearchMessage = 'The default minimum search length is 2.';
    this.state = { searchText: '', message: this.invalidSearchMessage };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch() {
    this.setState({ searchText: '', message: this.invalidSearchMessage });
  }

  render() {
    return (
      <div>
        <Button text="Focus Me" onClick={this.handleButtonClick} id="search-field-focus-button" />
        <p>
          {this.state.message}
          {this.state.searchText}
        </p>
        <SearchField
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
          inputRefCallback={(inputRef) => { this.searchInput = inputRef; }}
        />
      </div>
    );
  }
}

export default SearchFieldFocus;
