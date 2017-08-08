import React from 'react';
import PropTypes from 'prop-types';
import SearchField from 'terra-search-field';

const propTypes = {
  /**
   * The mimimum search text length if provided. Used for the invalid search length message.
   */
  minimumSearchTextLength: PropTypes.string,
};

const defaultProps = {
  minimumSearchTextLength: '2',
};

class SearchFieldExampleTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.defaultLength = this.props.minimumSearchTextLength === '2' ? 'default' : '';
    this.invalidSearchMessage = `The ${this.defaultLength} minimum search length is ${this.props.minimumSearchTextLength}.`;
    this.state = { searchText: '', message: this.invalidSearchMessage };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText, message: 'Search Text: ' });
  }

  handleInvalidSearch() {
    this.setState({ searchText: '', message: this.invalidSearchMessage });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}{this.state.searchText}</p>
        <SearchField
          onSearch={this.handleSearch}
          onInvalidSearch={this.handleInvalidSearch}
          {...this.props}
        />
      </div>
    );
  }
}

SearchFieldExampleTemplate.propTypes = propTypes;
SearchFieldExampleTemplate.defaultProps = defaultProps;

export default SearchFieldExampleTemplate;
