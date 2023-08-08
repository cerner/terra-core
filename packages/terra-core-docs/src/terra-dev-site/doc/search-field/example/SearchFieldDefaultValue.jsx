import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDefaultValue = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField defaultValue="Default" onSearch={setSearchText} onInvalidSearch={setSearchText} />
  );
};

export default SearchFieldDefaultValue;
