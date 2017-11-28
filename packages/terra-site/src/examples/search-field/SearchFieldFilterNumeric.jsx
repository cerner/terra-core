import React from 'react';
import SearchFieldExampleTemplate from './SearchFieldExampleTemplate';

class SearchFieldFilterNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { searchText: '' };
  }

  onChange(event, text) {
    let searchText = text;
    if (text && text.length > 0 && /\d/.test(text)) {
      searchText = text.substring(0, text.length - 1);
    }
    this.setState({ searchText });
  }

  render() {
    return (
      <SearchFieldExampleTemplate
        onChange={this.onChange}
        value={this.state.searchText}
      />
    );
  }
}

export default SearchFieldFilterNumeric;
