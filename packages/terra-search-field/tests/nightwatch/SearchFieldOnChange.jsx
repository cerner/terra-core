import React from 'react';
import SearchField from '../../lib/SearchField';

class SearchFieldOnChange extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { searchText: '', callCount: 0 };
  }

  onChange(event) {
    this.setState({ searchText: event.target.value, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p id="searchOnChangeCallCount">{this.state.callCount}</p>
        <p id="searchOnChangeText">{this.state.searchText}</p>
        <SearchField
          id="searchfield"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchFieldOnChange;
