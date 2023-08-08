import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDisableAutoFormatAttrs = () => {
  const [setSearchText] = useState('');

  return (
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
  );
};

export default SearchFieldDisableAutoFormatAttrs;
