import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchFieldExampleTemplate from 'terra-search-field/lib/terra-dev-site/doc/example/SearchFieldExampleTemplate';
import Button from 'terra-button/lib/Button';

class SearchFieldFocus extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { searchText: '' };
  }

  onChange(event, text) {
    this.setState({ searchText: text });
  }

  handleButtonClick() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button text="Focus Me" onClick={this.handleButtonClick} id="search-field-focus-button" />
        <SearchFieldExampleTemplate
          onChange={this.onChange}
          value={this.state.searchText}
          inputFieldRefCallback={(inputRef) => { this.searchInput = inputRef; }}
        />
      </React.Fragment>
    );
  }
}

export default SearchFieldFocus;
