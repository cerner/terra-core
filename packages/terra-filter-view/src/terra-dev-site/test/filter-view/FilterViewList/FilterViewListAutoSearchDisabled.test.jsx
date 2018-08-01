import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewListAutoSearchDisabled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      message: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchValue) {
    this.setState({ searchValue, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchValue) {
    this.setState({ searchValue, message: 'Invalid Text: ' });
  }
  render() {
    return (
      <div>
        <h3> Auto Searching is disabled </h3>
        <FilterView variant="list" disableAutoSearch onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch}>
          <FilterView.Option value="red" display="Red" key="red" />
          <FilterView.Option value="green" display="Green" key="green" />
          <FilterView.Option value="blue" display="Blue" key="blue" />
        </FilterView>
        <div id="search-callback-text" style={{ marginTop: '10px' }}>
          {this.state.message}{this.state.searchValue}
        </div>
      </div>
    );
  }
}
export default FilterViewListAutoSearchDisabled;
