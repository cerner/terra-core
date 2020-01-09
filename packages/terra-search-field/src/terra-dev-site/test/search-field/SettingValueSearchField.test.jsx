import React from 'react';
import Button from 'terra-button/lib/Button';
import SearchField from '../../../SearchField';

class CallbackSearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      message: '',
      returnedText: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
    this.setTextClick = this.setTextClick.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchText, message: 'INVALID Search Text: ' });
  }

  setTextClick() {
    if (this.searchInput) {
      setTimeout(() => { this.searchInput.value = "Set Search Text"; }, 1000);
    }
  }

  render() {
    return (
      <div>
        <div> Minimum Search Length is 3 </div>
        <SearchField
          inputRef
          id="searchfield"
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
          minimumSearchTextLength={3}
          inputRefCallback={(inputRef) => { this.searchInput = inputRef; }}
        />
        <Button text="Set search field text" onClick={this.setTextClick} id="search-field-set-text-button" />
        <div id="search-callback-text">
          {this.state.message}
          {this.state.searchText}
        </div>
      </div>
    );
  }
}

export default CallbackSearchField;
