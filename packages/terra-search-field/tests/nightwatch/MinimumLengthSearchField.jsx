import React from 'react';
import Base from 'terra-base';
import SearchField from '../../lib/SearchField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class MinimumLengthSearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  render() {
    return (
      <Base locale={locale}>
        <div id="search-callback-text">
          Search Text: {this.state.searchText}
        </div>
        <SearchField id="searchfieldWithMinimumLength" minimumSearchTextLength={5} onSearch={(searchText) => { this.setState({ searchText }); }} />
      </Base>
    );
  }

}

export default MinimumLengthSearchField;
