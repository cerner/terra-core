import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldBlock = () => {
  const [setSearchText] = useState('');

  return (
    <SearchField isBlock onSearch={setSearchText} onInvalidSearch={setSearchText} />
  );
};

export default SearchFieldBlock;
