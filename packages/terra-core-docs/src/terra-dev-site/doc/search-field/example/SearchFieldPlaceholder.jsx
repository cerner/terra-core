import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldPlaceholder = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField onSearch={setSearchText} onInvalidSearch={setSearchText} placeholder="- Search Here -" />
  );
};

export default SearchFieldPlaceholder;
