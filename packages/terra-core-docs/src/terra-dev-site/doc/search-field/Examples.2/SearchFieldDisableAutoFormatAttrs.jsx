import React from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDisableAutoFormatAttrs = () => (
  <SearchField
    inputAttributes={{
      autoCorrect: 'off',
      autoComplete: 'off',
      autoCapitalize: 'off',
      spellCheck: 'false',
    }}
  />
);

export default SearchFieldDisableAutoFormatAttrs;
