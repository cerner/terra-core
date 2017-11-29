import React from 'react';
import SearchField from '../../lib/SearchField';

class AutoSearchDisabledSearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchCount: 0,
      searchText: '',
      message: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchCount: this.state.searchCount + 1, searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchCount: this.state.searchCount + 1, searchText, message: 'INVALID Search Text: ' });
  }

  render() {
    return (
      <div>
        <h3> Auto Searching is Disabled </h3>
        <SearchField id="searchfield" onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch} />
        <div id="search-callback-text">
          {this.state.message}{this.state.searchText}
        </div>
        <div id="search-count">
          Search Count: {this.state.searchCount}
        </div>
      </div>
    );
  }

}

export default AutoSearchDisabledSearchField;
