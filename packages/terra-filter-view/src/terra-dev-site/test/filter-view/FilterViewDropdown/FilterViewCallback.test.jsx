import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewCallback extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      message: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchValue) {
    this.setState({ searchValue, message: 'Search text: ' });
  }

  handleInvalidSearch(searchValue) {
    this.setState({ searchValue, message: 'INVALID search: ' });
  }

  render() {
    return (
      <div>
        <h3>Minimum search length: 3</h3>
        <FilterView minimumSearchTextLength={3} onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch}>
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
        <p style={{ marginTop: '5rem' }}>{this.state.message}{this.state.searchValue}</p>
      </div>
    );
  }
}

export default FilterViewCallback;
