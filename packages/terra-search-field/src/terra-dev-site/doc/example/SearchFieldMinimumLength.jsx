

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';

class SearchFieldMinimumLength extends React.Component {
  constructor(props) {
    super(props);
    this.invalidSearchMessage = 'The default minimum search length is 5.';
    this.state = { searchText: '', message: this.invalidSearchMessage };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
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
        <p>
          {this.state.message}
          {this.state.searchText}
        </p>
        <SearchField
          minimumSearchTextLength={5}
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
        />
      </div>
    );
  }
}

export default SearchFieldMinimumLength;
