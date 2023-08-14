import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldWithLabel = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField groupName="Find Person" isLabelVisible onSearch={setSearchText} onInvalidSearch={setSearchText} />
  );
};

export default SearchFieldWithLabel;
