import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';

const INVALID_MESSAGE = 'The default minimum search length is 2.';

const SearchFieldBlock = () => {
  const [searchText, setSearchText] = useState('');

  const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  return (
    <div>
      <p>{message}</p>
      <SearchField isBlock onSearch={setSearchText} onInvalidSearch={setSearchText} />
    </div>
  );
};

export default SearchFieldBlock;
