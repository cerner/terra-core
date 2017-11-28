import React from 'react';
import SearchField from '../../lib/SearchField';

class SearchFieldOnChange extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { searchText: '', callCount: 0 };
  }

  onChange(event, text) {
    let searchText = text;
    if (text && text.length > 0 && /\d/.test(text)) {
      searchText = text.substring(0, text.length - 1);
    }
    this.setState({ searchText, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p id="searchOnChangeCallCount">{this.state.callCount}</p>
        <p id="searchOnChangeText">{this.state.searchText}</p>
        <SearchField
          id="searchfield"
          onChange={this.onChange}
          value={this.state.searchText}
        />
      </div>
    );
  }
}

export default SearchFieldOnChange;
