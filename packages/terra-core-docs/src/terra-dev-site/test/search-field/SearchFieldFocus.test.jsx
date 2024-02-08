import React from 'react';
import Button from 'terra-button/lib/Button';
import SearchField from 'terra-search-field';

class SearchFieldFocus extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { searchText: '' };
  }

  handleButtonClick() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  onChange(event, text) {
    this.setState({ searchText: text });
  }

  render() {
    return (
      <React.Fragment>
        <Button text="Focus Me" onClick={this.handleButtonClick} id="search-field-focus-button" />
        <SearchField
          onChange={this.onChange}
          value={this.state.searchText}
          inputRefCallback={(inputRef) => { this.searchInput = inputRef; }}
          isLabelVisible
          groupName="Find a clinic"
        />
      </React.Fragment>
    );
  }
}

export default SearchFieldFocus;
