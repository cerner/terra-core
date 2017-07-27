import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldMinimumLength extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      message: 'INVALID Search Text: ',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Valid Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchText, message: 'INVALID Search Text: ' });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}{this.state.searchText}</p>
        <SearchField minimumSearchTextLength={5}onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch} />
      </div>
    );
  }

}

export default SearchFieldMinimumLength;
