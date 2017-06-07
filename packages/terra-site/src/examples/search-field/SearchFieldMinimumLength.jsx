import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldMinimumLength extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  render() {
    return (
      <div>
        <div>
          Search Text: {this.state.searchText}
        </div>
        <SearchField minimumSearchTextLength={5} onSearch={(searchText) => { this.setState({ searchText }); }} />
      </div>
    );
  }

}

export default SearchFieldMinimumLength;
