import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDelayed = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField onSearch={setSearchText} onInvalidSearch={setSearchText} searchDelay={2000} />
  );
};

export default SearchFieldDelayed;
