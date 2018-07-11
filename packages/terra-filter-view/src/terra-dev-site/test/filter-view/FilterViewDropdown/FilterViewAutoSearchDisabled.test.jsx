import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewAutoSearchDisabled extends React.Component {
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
        <FilterView variant="dropdown" disableAutoSearch onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch}>
          <FilterView.Option value="red" display="Red" key={'red'} />
          <FilterView.Option value="green" display="Green" key={'green'} />
          <FilterView.Option value="blue" display="Blue" key={'blue'} />
        </FilterView>
        <div style={{ marginTop: '15px' }}>
          {this.state.message}{this.state.searchValue}
        </div>
      </div>
    );
  }
}
export default () => <FilterViewAutoSearchDisabled />;
