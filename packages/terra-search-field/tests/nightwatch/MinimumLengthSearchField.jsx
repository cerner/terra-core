import React from 'react';
import SearchField from '../../src/SearchField';

class MinimumLengthSearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  render() {
    return (
      <div>
        <div id="search-callback-text">
          Search Text: {this.state.searchText}
        </div>
        <SearchField id="searchfieldWithMinimumLength" minimumSearchTextLength={5} onSearch={(searchText) => { this.setState({ searchText }); }} />
      </div>
    );
  }

}

export default MinimumLengthSearchField;
