import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldWithLabel = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField isLabelVisible onSearch={setSearchText} onInvalidSearch={setSearchText} />
  );
};

export default SearchFieldWithLabel;
