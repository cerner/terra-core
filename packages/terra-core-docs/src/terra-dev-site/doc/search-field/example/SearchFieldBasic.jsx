import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const INVALID_MESSAGE = 'The default minimum search length is 2.';

const SearchFieldBasic = () => {
  const [searchText, setSearchText] = useState('');

  const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  return (
    <div>
      <p>{message}</p>
      <SearchField onSearch={setSearchText} onInvalidSearch={setSearchText} />
    </div>
  );
};

export default SearchFieldBasic;
