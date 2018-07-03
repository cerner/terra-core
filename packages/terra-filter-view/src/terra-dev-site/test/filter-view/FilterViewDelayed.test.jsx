import React from 'react';
import FilterView from '../../../FilterView';

class FilterViewDelayed extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    return (
      <div>
        <h3>Search Delay: 1000</h3>
        <FilterView onSearch={this.handleSearch} searchDelay={1000}>
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
        <p style={{ marginTop: '5rem' }}>Search Text: {this.state.searchValue}</p>
      </div>
    );
  }
}

export default FilterViewDelayed;
