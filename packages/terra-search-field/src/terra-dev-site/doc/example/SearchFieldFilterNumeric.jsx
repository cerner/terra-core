import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';

class SearchFieldFilterNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.invalidSearchMessage = 'The default minimum search length is 2.';
    this.state = { searchText: '', filteredText: '', message: this.invalidSearchMessage };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, text) {
    let filteredText = text;
    if (text && text.length > 0 && /\d/.test(text)) {
      filteredText = text.substring(0, text.length - 1);
    }
    this.setState({ filteredText });
  }

  handleInvalidSearch() {
    this.setState({ searchText: '', message: this.invalidSearchMessage });
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.message}
          {this.state.searchText}
        </p>
        <SearchField
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
          value={this.state.filteredText}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchFieldFilterNumeric;
