import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Content to display when search results are found.
   */
  searchResultContent: PropTypes.node,
};

const SearchResults = ({ searchResultContent }) => {
  return (
    <div role="option" aria-selected="false">
      {searchResultContent }
    </div>
  );
};

SearchResults.propTypes = propTypes;

export default SearchResults;
