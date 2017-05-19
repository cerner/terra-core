import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldDelayed extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleSearch(text) {
    this.setState({ searchText: text });
  }

  render() {
    return (
      <div>
        <div>
          Search Text: {this.state.searchText}
        </div>
        <SearchField searchDelay={2000} onSearch={this.handleSearch} />
      </div>
    );
  }

}

export default SearchFieldDelayed;
