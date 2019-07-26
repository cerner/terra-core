import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';

class SearchFieldDefaultValue extends React.Component {
  constructor(props) {
    super(props);
    this.invalidSearchMessage = 'The default minimum search length is 2.';
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
          defaultValue="Default"
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
        />
      </div>
    );
  }
}

export default SearchFieldDefaultValue;
