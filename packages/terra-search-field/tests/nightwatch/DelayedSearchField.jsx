import React from 'react';
import Base from 'terra-base';
import SearchField from '../../lib/SearchField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class DelayedSearchField extends React.Component {

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
        <SearchField searchDelay={1000} onSearch={(searchText) => { this.setState({ searchText }); }} />
      </Base>
    );
  }

}

export default DelayedSearchField;
