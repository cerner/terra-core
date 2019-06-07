import React from 'react';
import SearchField from '../../../SearchField';

class AutoSearchDisabledSearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      message: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchText, message: 'INVALID Search Text: ' });
  }

  render() {
    return (
      <div>
        <div> Auto Searching is Disabled </div>
        <SearchField
          id="searchfield"
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
          disableAutoSearch
        />
        <div id="search-callback-text">
          {this.state.message}
          {this.state.searchText}
        </div>
      </div>
    );
  }
}

export default AutoSearchDisabledSearchField;
