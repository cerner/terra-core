import React from 'react';
import SearchField from 'terra-search-field';

class DelayedSearchField extends React.Component {
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
          Search Text:
          {' '}
          {this.state.searchText}
        </div>
        <SearchField searchDelay={1000} onSearch={(searchText) => { this.setState({ searchText }); }} isLabelVisible groupName="Find a clinic" />
      </div>
    );
  }
}

export default DelayedSearchField;
