import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const INVALID_MESSAGE = 'The default minimum search length is 2.';

const SearchFieldDisableAutoFormatAttrs = () => {
  const [searchText, setSearchText] = useState('');

  const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  return (
    <div>
      <p>{message}</p>
      <SearchField
        inputAttributes={{
          autoCorrect: 'off',
          autoComplete: 'off',
          autoCapitalize: 'off',
          spellCheck: 'false',
        }}
        onSearch={setSearchText}
        onInvalidSearch={setSearchText}
      />
    </div>
  );
};

export default SearchFieldDisableAutoFormatAttrs;
