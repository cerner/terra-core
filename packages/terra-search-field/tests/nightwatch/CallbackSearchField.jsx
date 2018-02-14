import React from 'react';
import Base from 'terra-base';
import SearchField from '../../lib/SearchField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class CallbackSearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      message: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch(searchText) {
    this.setState({ searchText, message: 'INVALID Search Text: ' });
  }

  render() {
    return (
      <Base locale={locale}>
        <h3> Minimum Search Length is 3 </h3>
        <SearchField id="searchfield" onSearch={this.handleSearch} onInvalidSearch={this.handleInvalidSearch} minimumSearchTextLength={3} />
        <div id="search-callback-text">
          {this.state.message}{this.state.searchText}
        </div>
      </Base>
    );
  }

}

export default CallbackSearchField;
