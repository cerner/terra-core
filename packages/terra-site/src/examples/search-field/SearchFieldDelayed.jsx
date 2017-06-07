import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldDelayed extends React.Component {

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
        <SearchField searchDelay={2000} onSearch={(searchText) => { this.setState({ searchText }); }} />
      </div>
    );
  }

}

export default SearchFieldDelayed;
