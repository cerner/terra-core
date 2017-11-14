import React from 'react';
import SearchField from 'terra-search-field';

class SearchFieldOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { searchText: '', callCount: 0 };
  }

  onChange(event, searchText) {
    this.setState({ searchText, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p>{'onChange called number of times:  '}{this.state.callCount}</p>
        <p>{'onChange called with text:  '}{this.state.searchText}</p>
        <SearchField
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchFieldOnChange;
