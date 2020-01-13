import React from 'react';
import Button from 'terra-button/lib/Button';
import SearchField from '../../../SearchField';

class CallbackSearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      message: '',
      text: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
    this.setTextClick = this.setTextClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchText, message: 'INVALID Search Text: ' });
  }

  handleChange(event, text) {
    this.setState({ text });
  }

  handleInput(event, text) {
    this.setState({ text });
  }

  setTextClick() {
    if (this.searchInput) {
      setTimeout(() => {
        this.searchInput.value = "Set Search Text";
        let customEvent;
        if (typeof (Event) === 'function') {
          customEvent = new Event('input', {
            bubbles: true,
            cancelable: false,
          });
        } else {
          customEvent = document.createEvent('Event');
          customEvent.initEvent('input', true, false);
        }
        this.searchInput.dispatchEvent(customEvent);
      }, 1000);
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
          onChange={this.handleChange}
          onInput={this.handleInput}
          minimumSearchTextLength={3}
          value={this.state.text}
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
