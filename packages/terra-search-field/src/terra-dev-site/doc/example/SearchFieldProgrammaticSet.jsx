import React from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button/lib/Button';
import SearchField from '../../../SearchField';
import styles from '../../test/search-field/examplestyles.scss';

const cx = classNames.bind(styles);

class SearchFieldProgrammaticSet extends React.Component {
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

  setTextClick() {
    if (this.searchInput) {
      this.searchInput.value = 'IpsumLorem';
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
    }
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

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
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
        <Button text="Set search field text" onClick={this.setTextClick} id="search-field-set-text-button" className={cx('programattic-button')} />
        <div id="search-callback-text">
          {this.state.message}
          {this.state.searchText}
        </div>
      </div>
    );
  }
}

export default SearchFieldProgrammaticSet;
