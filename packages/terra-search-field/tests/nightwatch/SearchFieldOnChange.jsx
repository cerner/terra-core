import React from 'react';
import Base from 'terra-base';
import SearchField from '../../lib/SearchField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

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
      <Base locale={locale}>
        <p id="searchOnChangeCallCount">{this.state.callCount}</p>
        <p id="searchOnChangeText">{this.state.searchText}</p>
        <SearchField
          id="searchfield"
          onChange={this.onChange}
          value={this.state.searchText}
        />
      </Base>
    );
  }
}

export default SearchFieldOnChange;
