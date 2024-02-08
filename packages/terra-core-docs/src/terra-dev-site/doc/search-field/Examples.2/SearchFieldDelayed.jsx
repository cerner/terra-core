import React from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDelayed = () => (
  <SearchField searchDelay={3000} isLabelVisible groupName="Find a clinic" />
);

export default SearchFieldDelayed;
