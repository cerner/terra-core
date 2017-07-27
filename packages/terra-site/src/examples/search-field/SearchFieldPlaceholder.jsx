import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  render() {
    return (
      <div>
        <p>Search Text: {this.state.searchText}</p>
        <SearchField placeholder="Search Here" onSearch={(searchText) => { this.setState({ searchText }); }} />
      </div>
    );
  }
}

export default SearchFieldView;
